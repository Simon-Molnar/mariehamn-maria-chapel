import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "@phosphor-icons/react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const firstVariant = node.variants.edges[0]?.node;
  const firstImage = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    });

    toast.success("Tillagd i varukorgen", {
      description: node.title,
      position: "top-center"
    });
  };

  return (
    <Link 
      to={`/butik/produkt/${node.handle}`}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow"
    >
      <div className="aspect-square bg-muted overflow-hidden">
        {firstImage ? (
          <img
            src={firstImage.url}
            alt={firstImage.altText || node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Ingen bild
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-lg text-foreground mb-1 line-clamp-2">
          {node.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
          {node.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-foreground">
            {parseFloat(price.amount).toFixed(2)} {price.currencyCode}
          </span>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            disabled={!firstVariant?.availableForSale}
          >
            <ShoppingCart className="h-4 w-4 mr-2" weight="light" />
            Lägg till
          </Button>
        </div>
      </div>
    </Link>
  );
};
