import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { ShopifyProduct, storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY } from "@/lib/shopify";
import butikHero from "@/assets/butik-hero.avif";

const Butik = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchProducts = async (retryCount = 0) => {
      try {
        console.log('Starting to fetch products... attempt:', retryCount + 1);
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 20 });
        console.log('Fetched data:', data);
        
        if (!isMounted) return;
        
        if (data?.data?.products?.edges) {
          console.log('Products found:', data.data.products.edges.length);
          setProducts(data.data.products.edges);
          setError(null);
        } else if (retryCount < 2) {
          // Retry after a short delay
          console.log('No products found, retrying...');
          setTimeout(() => fetchProducts(retryCount + 1), 1000);
          return;
        } else {
          console.log('No products in response after retries');
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Ett fel uppstod');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} weight="light" />
              <span className="font-body">Tillbaka till startsidan</span>
            </Link>
            <CartDrawer />
          </div>

          {/* Hero Section */}
          <div
            className="relative text-center mb-12 -mx-6 px-6 py-16 md:py-24 rounded-md overflow-hidden"
            style={{
              backgroundImage: `url(${butikHero})`,
              backgroundSize: 'cover',
              backgroundPosition: '70% 30%'
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Butik
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                Böcker, andaktsföremål och gåvor som stöder det andliga livet
              </p>
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="font-body text-muted-foreground leading-relaxed">
              Vår församlingsbutik erbjuder ett urval av böcker, andaktsföremål och religiösa gåvor. 
              Intäkterna går till att stödja församlingens verksamhet och välgörenhetsprojekt.
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden animate-pulse">
                  <div className="aspect-square bg-muted" />
                  <div className="p-4 space-y-3">
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          ) : error ? (
            <div className="bg-destructive/10 border border-destructive rounded-xl p-12 max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Kunde inte ladda produkter
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                {error}
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Försök igen
              </button>
            </div>
          ) : (
            <div className="bg-card rounded-xl p-12 shadow-card max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Inga produkter än
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Butiken är under uppbyggnad. Kontakta oss gärna för information om vårt sortiment av böcker och andaktsföremål.
              </p>
              <a 
                href="mailto:info@stgoran.ax" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Kontakta oss
              </a>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center mt-12">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Besök eller beställ
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Butiken är öppen i samband med söndagens mässa. Du kan även kontakta oss för att höra om tillgänglighet eller för att göra en beställning.
            </p>
            <a 
              href="mailto:info@stgoran.ax" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Butik;
