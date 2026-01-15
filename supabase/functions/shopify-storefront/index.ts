import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'maria-s-parish-online-68mbr.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = '84e83a3165ef2effccd0aa26c526c57b';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, variables } = await req.json();

    console.log('Proxying Shopify Storefront API request...');
    console.log('Query:', query?.substring(0, 100) + '...');
    console.log('Variables:', JSON.stringify(variables));

    const response = await fetch(SHOPIFY_STOREFRONT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    console.log('Shopify response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Shopify API error:', errorText);
      return new Response(
        JSON.stringify({ error: `Shopify API error: ${response.status}`, details: errorText }),
        { 
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await response.json();
    console.log('Shopify response received, products count:', data?.data?.products?.edges?.length || 0);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in shopify-storefront function:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
