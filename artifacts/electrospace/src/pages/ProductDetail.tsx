import { useState } from "react";
import { useRoute } from "wouter";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "wouter";
import { Star, Truck, ShieldCheck, ShoppingCart, Check, Heart } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id;
  const product = products.find(p => p.id === productId);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  if (!product) {
    return <div className="container mx-auto px-4 py-24 text-center">Product not found.</div>;
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-foreground">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-card border border-border rounded-xl p-8 flex items-center justify-center relative">
            {!product.inStock && (
              <span className="absolute top-4 left-4 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded uppercase tracking-wider z-10 border border-border">
                Out of Stock
              </span>
            )}
            {product.originalPrice && (
              <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                Sale
              </span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-screen" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square bg-card border-2 border-primary rounded-lg p-2 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-screen" />
            </div>
            {/* Dummy thumbnails for design */}
            <div className="aspect-square bg-card border border-border rounded-lg p-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
               <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-screen grayscale" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-foreground">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current opacity-50" />
              <span className="text-muted-foreground text-sm ml-2">({product.rating} rating)</span>
            </div>
            <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-bold text-accent tracking-tight">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through decoration-muted-foreground/50 mb-1">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="space-y-6 mb-8 border-y border-border py-6">
            <div className="flex items-center gap-4">
              <span className="font-medium min-w-[80px]">Quantity</span>
              <div className="flex items-center border border-border rounded-md bg-background">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >-</button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >+</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  addItem(product.id, quantity);
                }}
                disabled={!product.inStock}
                className="flex-1 bg-primary text-primary-foreground py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button 
                disabled={!product.inStock}
                className="flex-1 bg-secondary text-secondary-foreground border border-border py-4 rounded-lg font-bold hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
              <button className="px-4 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-red-500 shrink-0">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="space-y-3 bg-secondary/30 p-4 rounded-lg border border-border text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              <span>Ships within 24 hours. Estimated delivery: 3-7 days anywhere in India.</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Tested before dispatch. 7-day replacement for manufacturing defects.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-20">
        <div className="flex items-center gap-8 border-b border-border mb-8">
          <button 
            onClick={() => setActiveTab("description")}
            className={`pb-4 text-lg font-medium transition-colors ${activeTab === "description" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab("specs")}
            className={`pb-4 text-lg font-medium transition-colors ${activeTab === "specs" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Specifications
          </button>
        </div>

        {activeTab === "description" && (
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>
              This {product.name} is a high-quality component ideal for electronics hobbyists and students. 
              Designed to integrate seamlessly into your embedded projects, it offers reliable performance 
              and robust build quality.
            </p>
            <p>
              Whether you are prototyping on a breadboard or building a final PCB, this module provides 
              the essential functionality required for modern IoT and hardware applications. It comes 
              with standard headers (where applicable) and is compatible with popular development environments.
            </p>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
              <tbody className="divide-y divide-border">
                <tr className="bg-secondary/20">
                  <th className="py-3 px-6 font-medium text-foreground w-1/3">Operating Voltage</th>
                  <td className="py-3 px-6 text-muted-foreground">3.3V - 5V DC</td>
                </tr>
                <tr>
                  <th className="py-3 px-6 font-medium text-foreground">Interface</th>
                  <td className="py-3 px-6 text-muted-foreground">Standard (I2C/SPI/UART depending on module)</td>
                </tr>
                <tr className="bg-secondary/20">
                  <th className="py-3 px-6 font-medium text-foreground">Dimensions</th>
                  <td className="py-3 px-6 text-muted-foreground">Standard footprint</td>
                </tr>
                <tr>
                  <th className="py-3 px-6 font-medium text-foreground">Compatibility</th>
                  <td className="py-3 px-6 text-muted-foreground">Arduino, ESP32, STM32, Raspberry Pi</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-8 border-b border-border pb-4">Frequently Bought Together</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
