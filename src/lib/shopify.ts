import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const SHOPIFY_API_VERSION = '2025-07';
export const SHOPIFY_STORE_PERMANENT_DOMAIN = 'maria-s-parish-online-68mbr.myshopify.com';

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  try {
    console.log('Fetching products via Admin API...');
    
    const { data, error } = await supabase.functions.invoke('shopify-admin', {
      body: { action: 'list' },
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error(error.message || 'Failed to fetch products');
    }

    console.log('Products data received:', data);
    
    if (data?.error) {
      throw new Error(data.error);
    }

    return data?.data?.products?.edges || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductByHandle(handle: string): Promise<ShopifyProduct['node'] | null> {
  try {
    console.log('Fetching product by handle:', handle);
    
    // Use Admin API to list products and find by handle
    const { data, error } = await supabase.functions.invoke('shopify-admin', {
      body: { action: 'list' },
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error(error.message || 'Failed to fetch product');
    }

    const products = data?.data?.products?.edges || [];
    const product = products.find((p: ShopifyProduct) => p.node.handle === handle);
    
    return product?.node || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Storefront API request for checkout (still needed for cart creation)
export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  try {
    console.log('Calling Shopify Storefront API via edge function...');
    
    const { data, error } = await supabase.functions.invoke('shopify-storefront', {
      body: { query, variables },
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error(error.message || 'Failed to call Shopify API');
    }

    console.log('Shopify data received:', data);
    
    if (data?.error) {
      if (data.error.includes('402')) {
        toast.error("Shopify: Payment required", {
          description: "Shopify API access requires an active Shopify billing plan.",
        });
        return null;
      }
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error('Shopify fetch error:', error);
    throw error;
  }
}

export const STOREFRONT_PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

export const STOREFRONT_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
