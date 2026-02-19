import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProduktDetalj = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const productData = await fetchProductByHandle(handle);
        if (productData) {
          setProduct(productData);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    const shopifyProduct: ShopifyProduct = { node: product };

    addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success("Tillagd i varukorgen", {
      description: `${product.title} x ${quantity}`,
      position: "top-center"
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="animate-pulse max-w-5xl mx-auto">
              <div className="h-6 bg-muted rounded w-48 mb-8" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square bg-muted rounded-xl" />
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded w-3/4" />
                  <div className="h-6 bg-muted rounded w-1/4" />
                  <div className="h-24 bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-3xl mb-4">Produkten hittades inte</h1>
            <Link to="/butik" className="text-primary hover:underline font-body">
              Tillbaka till butiken
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.variants.edges[selectedVariantIndex]?.node;
  const images = product.images.edges;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
            <Link to="/butik" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} weight="light" />
              <span className="font-body">Tillbaka till butiken</span>
            </Link>
            <CartDrawer />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Ingen bild
                  </div>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image.node.url}
                        alt={image.node.altText || `${product.title} bild ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  {product.title}
                </h1>
                <p className="font-display text-2xl font-semibold text-foreground">
                  {selectedVariant ? parseFloat(selectedVariant.price.amount).toFixed(2) : parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)} {selectedVariant?.price.currencyCode || product.priceRange.minVariantPrice.currencyCode}
                </p>
              </div>

              {product.description && (
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Variants */}
              {product.variants.edges.length > 1 && (
                <div className="space-y-3">
                  {product.options.map((option) => (
                    <div key={option.name}>
                      <label className="font-body text-sm font-medium text-foreground mb-2 block">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value, valueIndex) => {
                          const variantIndex = product.variants.edges.findIndex(
                            (v) => v.node.selectedOptions.some(
                              (o) => o.name === option.name && o.value === value
                            )
                          );
                          return (
                            <button
                              key={value}
                              onClick={() => setSelectedVariantIndex(variantIndex !== -1 ? variantIndex : valueIndex)}
                              className={`px-4 py-2 rounded-lg border font-body text-sm transition-colors ${
                                selectedVariantIndex === variantIndex
                                  ? 'border-primary bg-primary/10 text-foreground'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Antal
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" weight="light" />
                  </Button>
                  <span className="w-12 text-center font-body text-lg">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" weight="light" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="h-5 w-5 mr-2" weight="light" />
                {selectedVariant?.availableForSale ? "Lägg i varukorg" : "Ej i lager"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProduktDetalj;
