import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import butikHero from "@/assets/butik-hero.avif";

const Butik = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        if (!isMounted) return;
        setProducts(productList);
        setError(null);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Ett fel uppstod");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadProducts();
    return () => { isMounted = false; };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Butik"
        description="Böcker, andaktsföremål och gåvor som stöder det andliga livet"
        image={butikHero}
        imagePosition="70% 30%"
      />

      {/* Cart in top-right of first section */}
      <Section>
        <div className="flex justify-end mb-6">
          <CartDrawer />
        </div>

        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Församlingsbutiken erbjuder ett urval av böcker, andaktsföremål och religiösa gåvor.
            Intäkterna går till att stödja församlingens verksamhet och välgörenhetsprojekt.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : error ? (
          <div className="bg-destructive/10 border border-destructive rounded-xl p-12 max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">Kunde inte ladda produkter</h2>
            <p className="font-body text-muted-foreground mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Försök igen
            </button>
          </div>
        ) : (
          <div className="bg-card rounded-xl p-12 shadow-card max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">Inga produkter än</h2>
            <p className="font-body text-muted-foreground mb-6">
              Butiken är under uppbyggnad. Kontakta oss gärna för information om vårt sortiment.
            </p>
            <a
              href="mailto:info@mariehamnskatolskaforsamling.ax"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        )}
      </Section>

      <Section bg="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Besök eller beställ
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Butiken är öppen i samband med söndagens mässa. Du kan även kontakta oss för att höra om tillgänglighet eller för att göra en beställning.
          </p>
          <a
            href="mailto:info@mariehamnskatolskaforsamling.ax"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Butik;
