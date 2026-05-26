import { useState } from "react";
import { Package, Search } from "lucide-react";

export default function TrackOrder() {
  const [tracked, setTracked] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if(orderId) setTracked(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20">
          <Package className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Track Your Order</h1>
        <p className="text-muted-foreground">Enter your order ID below to check the current status.</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mb-8">
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="e.g. ES-10492" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <button 
            type="submit" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Track
          </button>
        </form>
      </div>

      {tracked && (
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Status for {orderId}</h2>
          
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-8 pb-4">
            <div className="relative">
              <span className="absolute -left-[33px] bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center border-4 border-card text-xs">✓</span>
              <div className="pl-4">
                <h3 className="font-semibold">Order Placed</h3>
                <p className="text-sm text-muted-foreground">{new Date(Date.now() - 172800000).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[33px] bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center border-4 border-card text-xs">✓</span>
              <div className="pl-4">
                <h3 className="font-semibold">Packed & Ready</h3>
                <p className="text-sm text-muted-foreground">{new Date(Date.now() - 86400000).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[33px] bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center border-4 border-card text-xs animate-pulse">●</span>
              <div className="pl-4">
                <h3 className="font-semibold text-primary">In Transit</h3>
                <p className="text-sm text-muted-foreground">Package arrived at regional sorting facility, Bangalore.</p>
                <p className="text-sm text-muted-foreground mt-1">{new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[33px] bg-secondary text-muted-foreground w-6 h-6 rounded-full flex items-center justify-center border-4 border-card text-xs"></span>
              <div className="pl-4">
                <h3 className="font-semibold text-muted-foreground">Out for Delivery</h3>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
            Courier: Delhivery | Tracking AWB: 128947192847
          </div>
        </div>
      )}
    </div>
  );
}
