import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "wouter";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";
import { ShieldCheck } from "lucide-react";
import { products } from "../data/products";

export default function Checkout() {
  const { items, itemCount } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pin: ""
  });

  const cartItems = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.id)!
  })).filter(item => item.product);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const gst = subtotal * 0.18;
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + gst + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent submission for mockup
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/products" className="text-primary hover:underline">Return to shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-border">Shipping Address</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Mobile Number</label>
                  <input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Address</label>
                <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">State</label>
                  <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">PIN Code</label>
                  <input required type="text" name="pin" value={formData.pin} onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-border">Payment Method</h2>
              <div className="flex gap-4 mb-6">
                <div className="h-10 w-16 bg-secondary flex items-center justify-center rounded border border-border"><SiVisa className="w-8 h-8" /></div>
                <div className="h-10 w-16 bg-secondary flex items-center justify-center rounded border border-border"><SiMastercard className="w-8 h-8" /></div>
                <div className="h-10 w-16 bg-secondary flex items-center justify-center rounded border border-border"><SiPaypal className="w-6 h-6" /></div>
                <div className="h-10 px-3 bg-secondary flex items-center justify-center rounded border border-border font-bold text-xs">UPI</div>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-destructive text-sm flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <p>⚠ Payment gateway integration currently under development. Mockup checkout only.</p>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-6 border-b border-border pb-4">Order Summary ({itemCount} items)</h2>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-secondary/30 rounded p-1 shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain mix-blend-screen" />
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium line-clamp-1">{item.product.name}</div>
                    <div className="text-muted-foreground mt-1">Qty: {item.quantity}</div>
                    <div className="font-medium text-accent mt-1">₹{(item.product.price * item.quantity).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm mb-6 border-t border-border pt-4">
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
            
            <button 
              type="submit"
              className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Place Order
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              By placing your order, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
