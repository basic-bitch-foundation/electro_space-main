import { useCart } from "../context/CartContext";
import { Link } from "wouter";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { products } from "../data/products";

export default function Cart() {
  const { items, updateQuantity, removeItem } = useCart();

  const cartItems = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.id)!
  })).filter(item => item.product);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const gst = subtotal * 0.18;
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + gst + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-md">
        <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any components to your workspace yet.</p>
        <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Browse Hardware <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/20 text-sm font-medium text-muted-foreground">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            
            <div className="divide-y divide-border">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 items-center">
                  <div className="col-span-1 sm:col-span-6 flex gap-4">
                    <div className="w-20 h-20 bg-secondary/30 rounded-lg p-2 shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain mix-blend-screen" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{item.product.sku}</div>
                      <Link href={`/products/${item.id}`} className="font-medium hover:text-primary transition-colors line-clamp-2">
                        {item.product.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-destructive text-sm mt-2 flex items-center gap-1 hover:opacity-80 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 sm:col-span-2 sm:text-center text-muted-foreground">
                    <span className="sm:hidden font-medium text-foreground">Price: </span>
                    ₹{item.product.price.toLocaleString()}
                  </div>
                  
                  <div className="col-span-1 sm:col-span-2 flex sm:justify-center">
                    <div className="flex items-center border border-border rounded-md bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >-</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >+</button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 sm:col-span-2 sm:text-right font-medium text-accent">
                    <span className="sm:hidden font-medium text-foreground">Subtotal: </span>
                    ₹{(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-6 border-b border-border pb-4">Order Summary</h2>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Items Subtotal</span>
                <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-foreground">₹{shipping}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Estimated GST (18%)</span>
                <span className="text-foreground">₹{gst.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span className="text-accent">₹{total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout" 
              className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-4"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              href="/products" 
              className="w-full block text-center bg-transparent border border-border text-foreground py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
