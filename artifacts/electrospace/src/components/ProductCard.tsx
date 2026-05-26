import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-card border border-card-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
    >
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-secondary/20 p-6 flex items-center justify-center">
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
            Sale
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10 border border-border">
            Out of Stock
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-muted-foreground mb-1 font-medium">{product.category}</div>
        <Link href={`/products/${product.id}`} className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
          {product.name}
        </Link>
        
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-accent tracking-tight">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => addItem(product.id)}
            disabled={!product.inStock}
            className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:hover:bg-secondary disabled:hover:text-secondary-foreground"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
