import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'maria-s-parish-online-68mbr.myshopify.com';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('SHOPIFY_ACCESS_TOKEN');
    
    if (!accessToken) {
      console.error('SHOPIFY_ACCESS_TOKEN not configured');
      return new Response(
        JSON.stringify({ error: 'Shopify access token not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const { action, productId } = await req.json();
    
    console.log('Shopify Admin API request:', action);

    let url: string;
    
    if (action === 'list') {
      url = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/admin/api/${SHOPIFY_API_VERSION}/products.json?status=active&limit=50`;
    } else if (action === 'get' && productId) {
      url = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/admin/api/${SHOPIFY_API_VERSION}/products/${productId}.json`;
    } else if (action === 'getByHandle') {
      const { handle } = await req.json();
      // First get all products and filter by handle
      url = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/admin/api/${SHOPIFY_API_VERSION}/products.json?handle=${handle}`;
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid action' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Fetching from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
    });

    console.log('Shopify Admin API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Shopify Admin API error:', errorText);
      return new Response(
        JSON.stringify({ error: `Shopify API error: ${response.status}`, details: errorText }),
        { 
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await response.json();
    console.log('Products count:', data?.products?.length || (data?.product ? 1 : 0));

    // Transform Admin API response to match Storefront API structure
    if (data.products) {
      const transformedProducts = data.products.map((product: any) => ({
        node: {
          id: `gid://shopify/Product/${product.id}`,
          title: product.title,
          description: product.body_html?.replace(/<[^>]*>/g, '') || '',
          handle: product.handle,
          priceRange: {
            minVariantPrice: {
              amount: product.variants?.[0]?.price || '0',
              currencyCode: 'EUR'
            }
          },
          images: {
            edges: (product.images || []).map((img: any) => ({
              node: {
                url: img.src,
                altText: img.alt
              }
            }))
          },
          variants: {
            edges: (product.variants || []).map((variant: any) => ({
              node: {
                id: `gid://shopify/ProductVariant/${variant.id}`,
                title: variant.title,
                price: {
                  amount: variant.price,
                  currencyCode: 'EUR'
                },
                availableForSale: true,
                selectedOptions: variant.option1 ? [{ name: 'Option', value: variant.option1 }] : []
              }
            }))
          },
          options: product.options || []
        }
      }));

      return new Response(
        JSON.stringify({ data: { products: { edges: transformedProducts } } }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else if (data.product) {
      const product = data.product;
      const transformedProduct = {
        id: `gid://shopify/Product/${product.id}`,
        title: product.title,
        description: product.body_html?.replace(/<[^>]*>/g, '') || '',
        handle: product.handle,
        priceRange: {
          minVariantPrice: {
            amount: product.variants?.[0]?.price || '0',
            currencyCode: 'EUR'
          }
        },
        images: {
          edges: (product.images || []).map((img: any) => ({
            node: {
              url: img.src,
              altText: img.alt
            }
          }))
        },
        variants: {
          edges: (product.variants || []).map((variant: any) => ({
            node: {
              id: `gid://shopify/ProductVariant/${variant.id}`,
              title: variant.title,
              price: {
                amount: variant.price,
                currencyCode: 'EUR'
              },
              availableForSale: true,
              selectedOptions: variant.option1 ? [{ name: 'Option', value: variant.option1 }] : []
            }
          }))
        },
        options: product.options || []
      };

      return new Response(
        JSON.stringify({ data: { productByHandle: transformedProduct } }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in shopify-admin function:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
