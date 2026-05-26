# Electrospace Full Source Code


---

## App.tsx

```tsx
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import { Privacy, Terms, Shipping, Refunds } from "./pages/Policies";
import FAQ from "./pages/FAQ";
import TrackOrder from "./pages/TrackOrder";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/refunds" component={Refunds} />
        <Route path="/faq" component={FAQ} />
        <Route path="/track-order" component={TrackOrder} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </CartProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

```

---

## main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

```

---

## index.css

```tsx
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-primary-border: var(--primary-border);

  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-secondary-border: var(--secondary-border);

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-muted-border: var(--muted-border);

  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-accent-border: var(--accent-border);

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-destructive-border: var(--destructive-border);

  --color-chart-1: hsl(var(--chart-1));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-5: hsl(var(--chart-5));

  --color-sidebar: hsl(var(--sidebar));
  --color-sidebar-foreground: hsl(var(--sidebar-foreground));
  --color-sidebar-border: hsl(var(--sidebar-border));
  --color-sidebar-primary: hsl(var(--sidebar-primary));
  --color-sidebar-primary-foreground: hsl(var(--sidebar-primary-foreground));
  --color-sidebar-primary-border: var(--sidebar-primary-border);
  --color-sidebar-accent: hsl(var(--sidebar-accent));
  --color-sidebar-accent-foreground: hsl(var(--sidebar-accent-foreground));
  --color-sidebar-accent-border: var(--sidebar-accent-border);
  --color-sidebar-ring: hsl(var(--sidebar-ring));

  --font-sans: var(--app-font-sans);
  --font-serif: var(--app-font-serif);
  --font-mono: var(--app-font-mono);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --button-outline: rgba(0,0,0, .10);
  --badge-outline: rgba(0,0,0, .05);
  --opaque-button-border-intensity: -8;
  --elevate-1: rgba(0,0,0, .03);
  --elevate-2: rgba(0,0,0, .08);

  /* Light mode fallbacks (won't be used mostly) */
  --background: 240 3% 98%;
  --foreground: 240 5% 10%;
  --border: 240 5% 90%;
  --card: 0 0% 100%;
  --card-foreground: 240 5% 10%;
  --card-border: 240 5% 90%;
  --sidebar: 0 0% 100%;
  --sidebar-foreground: 240 5% 10%;
  --sidebar-border: 240 5% 90%;
  --sidebar-primary: 217 91% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 240 5% 96%;
  --sidebar-accent-foreground: 240 5% 10%;
  --sidebar-ring: 217 91% 60%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 5% 10%;
  --popover-border: 240 5% 90%;
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 5% 96%;
  --secondary-foreground: 240 5% 10%;
  --muted: 240 5% 96%;
  --muted-foreground: 240 4% 46%;
  --accent: 240 5% 96%;
  --accent-foreground: 240 5% 10%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --input: 240 5% 90%;
  --ring: 217 91% 60%;
  --chart-1: 217 91% 60%;
  --chart-2: 189 94% 43%;
  --chart-3: 240 5% 10%;
  --chart-4: 0 84% 60%;
  --chart-5: 142 71% 45%;

  --app-font-sans: 'Inter', sans-serif;
  --app-font-serif: Georgia, serif;
  --app-font-mono: Menlo, monospace;
  --radius: .5rem;
  
  --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --sidebar-primary-border: hsl(var(--sidebar-primary));
  --sidebar-accent-border: hsl(var(--sidebar-accent));
  --primary-border: hsl(var(--primary));
  --secondary-border: hsl(var(--secondary));
  --muted-border: hsl(var(--muted));
  --accent-border: hsl(var(--accent));
  --destructive-border: hsl(var(--destructive));
}

.dark {
  --button-outline: rgba(255,255,255, .10);
  --badge-outline: rgba(255,255,255, .05);
  --opaque-button-border-intensity: 9;
  --elevate-1: rgba(255,255,255, .04);
  --elevate-2: rgba(255,255,255, .09);

  /* Electrospace Dark Theme */
  --background: 240 3% 6%;      /* #0f0f10 */
  --foreground: 0 0% 95%;       /* Light text */
  --border: 240 5% 20%;         /* Dark border */
  
  --card: 240 5% 10%;           /* #18181b */
  --card-foreground: 0 0% 95%;
  --card-border: 240 5% 16%;
  
  --sidebar: 240 5% 8%;
  --sidebar-foreground: 0 0% 95%;
  --sidebar-border: 240 5% 16%;
  --sidebar-primary: 217 91% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 240 5% 16%;
  --sidebar-accent-foreground: 0 0% 95%;
  --sidebar-ring: 217 91% 60%;
  
  --popover: 240 5% 10%;
  --popover-foreground: 0 0% 95%;
  --popover-border: 240 5% 20%;
  
  --primary: 217 91% 60%;       /* #3b82f6 Soft Blue */
  --primary-foreground: 0 0% 100%;
  
  --secondary: 240 5% 16%;      /* Darker grey */
  --secondary-foreground: 0 0% 95%;
  
  --muted: 240 5% 12%;
  --muted-foreground: 240 5% 65%;
  
  --accent: 189 94% 43%;        /* #06b6d4 Muted Cyan highlight */
  --accent-foreground: 0 0% 100%;
  
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  
  --input: 240 5% 20%;
  --ring: 217 91% 60%;
  
  --chart-1: 217 91% 60%;
  --chart-2: 189 94% 43%;
  --chart-3: 240 5% 80%;
  --chart-4: 0 84% 60%;
  --chart-5: 142 71% 45%;

  --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}

```

---

## components/Layout.tsx

```tsx
import { ReactNode } from "react";
import AnnouncementStrip from "./AnnouncementStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/30">
      <AnnouncementStrip />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

```

---

## components/AnnouncementStrip.tsx

```tsx
export default function AnnouncementStrip() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 text-primary-foreground py-1.5 overflow-hidden whitespace-nowrap">
      <div className="animate-[slide_20s_linear_infinite] inline-block">
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

```

---

## components/Navbar.tsx

```tsx
import { Link } from "wouter";
import { Search, Heart, ShoppingCart, User, Cpu } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="font-bold tracking-tight text-lg hidden sm:inline-block text-foreground">
            ELECTROSPACE
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md hidden md:flex items-center relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input 
            type="text" 
            placeholder="Search for components, boards..." 
            className="w-full bg-secondary/50 border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-secondary transition-colors text-foreground"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="hover:text-primary transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Category Strip */}
      <div className="border-t border-border/40 bg-background/50 hidden md:block">
        <div className="container mx-auto px-4 h-10 flex items-center gap-6 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/products" className="hover:text-primary transition-colors font-medium">All Products</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Dev Boards</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Displays</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Components</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Power Modules</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Wireless</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">DIY Kits</Link>
        </div>
      </div>
    </nav>
  );
}

```

---

## components/Footer.tsx

```tsx
import { Link } from "wouter";
import { Cpu } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity w-fit">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold tracking-tight text-lg">ELECTROSPACE</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Built by makers, for makers. Quality electronics, dev boards, and components delivered across India.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><SiInstagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><SiYoutube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Policies</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/refunds" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe for new product drops, maker tutorials, and exclusive discounts.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Email: <a href="mailto:ytpartnership2427@gmail.com" className="text-primary hover:underline">ytpartnership2427@gmail.com</a></p>
              <p className="mt-1">Support Hours: 10 AM - 6 PM (Mon-Sat)</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Electrospace. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

---

## components/ProductCard.tsx

```tsx
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

```

---

## context/CartContext.tsx

```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (id: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (id: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id, quantity }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

```

---

## data/products.ts

```tsx
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  sku: string;
  inStock: boolean;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Waveshare 2.13\" E-Ink Display",
    price: 1799,
    category: "Displays",
    rating: 4.5,
    sku: "WS-EINK-213",
    inStock: true,
    image: "/images/ws-eink.png",
    description: "High contrast e-ink display suitable for low power applications and makers building smart tags."
  },
  {
    id: "2",
    name: "ESP32 Dev Board WiFi+BT",
    price: 399,
    originalPrice: 499,
    category: "Development Boards",
    rating: 4.8,
    sku: "ES-ESP32-DEV",
    inStock: true,
    image: "/images/esp32.png",
    description: "Powerful WiFi and Bluetooth module for all your IoT needs. The quintessential maker board."
  },
  {
    id: "3",
    name: "Raspberry Pi Pico",
    price: 449,
    category: "Development Boards",
    rating: 4.7,
    sku: "RPI-PICO-H",
    inStock: true,
    image: "/images/rpi-pico.png",
    description: "A fast, versatile, and highly affordable microcontroller board built using the RP2040 chip."
  },
  {
    id: "4",
    name: "USB-C PD Trigger Module",
    price: 249,
    category: "Power Modules",
    rating: 4.3,
    sku: "PM-USBC-PD1",
    inStock: true,
    image: "/images/usbc-pd.png",
    description: "Extract the exact voltage you need from any USB-C Power Delivery source."
  },
  {
    id: "5",
    name: "NRF24L01 Wireless Module",
    price: 129,
    category: "Wireless",
    rating: 4.2,
    sku: "WL-NRF24-01",
    inStock: false,
    image: "/images/nrf24l01.png",
    description: "Reliable 2.4GHz wireless transceiver for point-to-point communication between microcontrollers."
  },
  {
    id: "6",
    name: "OLED 0.96\" Display",
    price: 159,
    category: "Displays",
    rating: 4.6,
    sku: "DIS-OLED-096",
    inStock: true,
    image: "/images/oled-096.png",
    description: "Crisp and bright I2C OLED display perfect for minimal UI and data logging."
  },
  {
    id: "7",
    name: "STM32 Blue Pill",
    price: 299,
    category: "Development Boards",
    rating: 4.4,
    sku: "STM-F103-BP",
    inStock: true,
    image: "/images/stm32.png",
    description: "Step up your embedded skills with this powerful 32-bit ARM Cortex-M3 board."
  },
  {
    id: "8",
    name: "TP4056 Battery Charging Module",
    price: 49,
    category: "Power Modules",
    rating: 4.5,
    sku: "PM-TP4056",
    inStock: true,
    image: "/images/tp4056.png",
    description: "Safely charge your single-cell lithium batteries with this staple module."
  },
  {
    id: "9",
    name: "Arduino Nano Compatible",
    price: 249,
    originalPrice: 299,
    category: "Development Boards",
    rating: 4.6,
    sku: "ARD-NANO-V3",
    inStock: true,
    image: "/images/arduino-nano.png",
    description: "The classic maker board in a breadboard-friendly form factor."
  },
  {
    id: "10",
    name: "1.54\" SPI TFT Display",
    price: 349,
    category: "Displays",
    rating: 4.3,
    sku: "DIS-TFT-154",
    inStock: true,
    image: "/images/tft-154.png",
    description: "Full color high refresh SPI display for richer interfaces."
  }
];

```

---

## pages/Home.tsx

```tsx
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Zap, GraduationCap, Mail, Cpu } from "lucide-react";

export default function Home() {
  const featured = products.slice(0, 6);
  const bestSellers = products.slice(1, 5);

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              Empowering Indian Makers
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Build Hardware <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Beyond Imagination</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Premium development boards, displays, and genuine components for your next embedded project. Shipped fast across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Shop Components
              </Link>
              <Link href="/products?category=Displays" className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 border border-border transition-all">
                Explore Displays
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Fast Shipping</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Secure Checkout</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Tested Components</span>
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> Student Friendly</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Hardware</h2>
            <p className="text-muted-foreground">Essential boards and modules for your workshop.</p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex text-primary hover:text-accent font-medium transition-colors">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Why Electrospace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Curated for Makers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">No clutter. We only stock the boards and modules that actually matter for modern embedded development.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reliable Pan-India Shipping</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Fast processing times and secure packaging so your components arrive safely, right when you need them.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Technical Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Got a question about a pinout or library? Email us. We're hardware engineers, not just a retail storefront.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

```

---

## pages/Products.tsx

```tsx
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Filter, Search } from "lucide-react";

export default function Products() {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <span className="hover:text-foreground cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-card border border-card-border rounded-xl p-5 sticky top-24">
            <div className="flex items-center gap-2 font-semibold text-lg mb-6 pb-4 border-b border-border">
              <Filter className="w-5 h-5" /> Filters
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3 text-sm">Categories</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <label className="flex items-center gap-2 hover:text-foreground cursor-pointer"><input type="checkbox" className="rounded border-border bg-secondary accent-primary" /> Development Boards</label>
                <label className="flex items-center gap-2 hover:text-foreground cursor-pointer"><input type="checkbox" className="rounded border-border bg-secondary accent-primary" /> Displays</label>
                <label className="flex items-center gap-2 hover:text-foreground cursor-pointer"><input type="checkbox" className="rounded border-border bg-secondary accent-primary" /> Power Modules</label>
                <label className="flex items-center gap-2 hover:text-foreground cursor-pointer"><input type="checkbox" className="rounded border-border bg-secondary accent-primary" /> Wireless</label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3 text-sm">Availability</h3>
              <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-border bg-secondary accent-primary" /> In Stock Only
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">All Hardware</h1>
            
            <div className="flex items-center gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-card border border-card-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <select className="bg-card border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                <option>Sort: Newest</option>
                <option>Sort: Price (Low to High)</option>
                <option>Sort: Price (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground">No products found matching "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

```

---

## pages/ProductDetail.tsx

```tsx
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

```

---

## pages/Cart.tsx

```tsx
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

```

---

## pages/Checkout.tsx

```tsx
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

```

---

## pages/About.tsx

```tsx
import { Cpu } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">About Electrospace</h1>
        <p className="text-xl text-muted-foreground">Built by makers, for makers.</p>
      </div>

      <div className="prose prose-invert prose-primary mx-auto">
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          Electrospace started in a small workshop in Bangalore, born out of a simple frustration: why was it so hard to get genuine, well-documented electronics components in India without paying massive markups or waiting weeks for international shipping?
        </p>
        
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          As engineering students and hardware hobbyists, we spent more time sourcing parts than actually building projects. We were tired of counterfeit chips, poorly translated datasheets, and components that arrived bent in bubble wrap.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">Our Mission</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          We want to make hardware development accessible to every student, hobbyist, and professional in India. We don't just sell parts; we test them, we write sample code for them, and we actually use them in our own projects.
        </p>

        <ul className="space-y-4 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Curated Selection:</strong> We only stock components that are useful, modern, and reliable. No more sifting through thousands of obsolete parts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Fair Pricing:</strong> Student-friendly pricing. We keep our margins low because we know what it's like to build on a tight budget.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Technical Support:</strong> If you buy a board from us and can't get it to work, email us. Real hardware engineers will help you troubleshoot.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">The Workshop Vibe</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We designed this website to feel like a proper workspace. Dark mode, clean interfaces, focused on the hardware. We hope you find what you need to build something amazing.
        </p>
      </div>
    </div>
  );
}

```

---

## pages/Contact.tsx

```tsx
import { Mail, MapPin } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent. We'll get back to you soon!");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground text-center">Contact Us</h1>
      <p className="text-muted-foreground text-center mb-12">Need help with a board? Have a question about shipping? Reach out.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
              <input required type="text" className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
              <input required type="email" className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
              <input required type="text" className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <textarea required rows={5} className="w-full bg-secondary/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm mb-1">For general queries and technical support.</p>
                  <a href="mailto:ytpartnership2427@gmail.com" className="text-primary hover:underline">ytpartnership2427@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Workshop Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Bangalore, Karnataka<br/>
                    India
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Note: We operate purely online. No walk-ins.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with new stock and project builds.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><SiInstagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><SiYoutube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

---

## pages/FAQ.tsx

```tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Do you ship across India?",
    a: "Yes, we ship to all pin codes in India using reliable courier partners. Standard shipping takes 3-7 business days depending on your location."
  },
  {
    q: "Are the components genuine?",
    a: "Absolutely. We source directly from authorized distributors or manufacturers. We test samples from every batch to ensure quality and prevent counterfeits."
  },
  {
    q: "Can I get a GST invoice?",
    a: "Yes, GST invoices are automatically generated and emailed to you upon order confirmation. They are suitable for claiming input tax credit."
  },
  {
    q: "Do you offer COD (Cash on Delivery)?",
    a: "Currently, we only accept prepaid orders to streamline our operations and ensure faster delivery times. We support UPI, Cards, and Net Banking."
  },
  {
    q: "I fried my board. Can I return it?",
    a: "Unfortunately, no. Electronic components are delicate and can be easily damaged by incorrect voltage, reverse polarity, or ESD. We only accept returns for items that are defective out of the box."
  },
  {
    q: "Do you offer student discounts?",
    a: "Our pricing is already kept as low as possible for everyone. However, we occasionally run special promo codes for college hardware clubs. Contact us if you are buying in bulk for a college project."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-foreground text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
            <button 
              className="w-full px-6 py-4 flex items-center justify-between font-medium text-left hover:bg-secondary/50 transition-colors focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              {open === i ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>
            {open === i && (
              <div className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed border-t border-border/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-muted-foreground">
        <p>Still have questions? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
      </div>
    </div>
  );
}

```

---

## pages/TrackOrder.tsx

```tsx
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

```

---

## pages/Policies.tsx

```tsx
export default function Policy({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-foreground pb-4 border-b border-border">{title}</h1>
      <div className="prose prose-invert prose-primary mx-auto text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <Policy title="Privacy Policy">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>
      <h3>1. Information We Collect</h3>
      <p>We collect information you provide directly to us when making a purchase, creating an account, or subscribing to our newsletter. This includes your name, email address, shipping address, and phone number. We do not store payment card details on our servers; all payments are processed securely through our payment gateway partners.</p>
      
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to process your orders, send shipping notifications, communicate about order issues, and (if opted in) send promotional emails about new components or tutorials.</p>
      
      <h3>3. Cookies</h3>
      <p>We use minimal cookies necessary for the website to function (like keeping your cart active) and basic analytics to understand which products are popular. We do not use aggressive tracking or sell your data to third-party ad networks.</p>
      
      <h3>4. Data Protection</h3>
      <p>Your data is stored securely. We take appropriate measures to protect against unauthorized access or alteration of your personal information.</p>
    </Policy>
  );
}

export function Terms() {
  return (
    <Policy title="Terms & Conditions">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>
      <h3>1. General</h3>
      <p>By accessing and placing an order with Electrospace, you confirm that you are in agreement with and bound by the terms of service contained herein.</p>
      
      <h3>2. Product Information</h3>
      <p>We strive to ensure all product descriptions, images, and specifications are accurate. However, electronic components may occasionally vary slightly in appearance (e.g., PCB color) from the images shown, though functional specifications will remain identical.</p>
      
      <h3>3. Limitation of Liability</h3>
      <p>Electrospace shall not be liable for any damage to your equipment, property, or person arising from the use or misuse of the electronic components sold. Hardware development carries inherent risks; please exercise caution, especially when working with power modules and mains voltage.</p>
      
      <h3>4. Pricing</h3>
      <p>All prices are in Indian Rupees (INR) and are subject to change without notice. GST is applicable as per government regulations.</p>
    </Policy>
  );
}

export function Shipping() {
  return (
    <Policy title="Shipping Policy">
      <h3>Processing Time</h3>
      <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
      
      <h3>Shipping Rates & Estimates</h3>
      <p>We offer flat-rate shipping across India for ₹99. Orders typically arrive within 3-7 business days depending on your location. Metro cities usually see faster delivery times (2-4 days).</p>
      
      <h3>Logistics Partners</h3>
      <p>We partner with reliable courier services like Delhivery, BlueDart, and India Post to ensure your sensitive electronic components reach you safely.</p>
      
      <h3>Damaged Packages</h3>
      <p>If your package arrives damaged, please take photos before opening it and contact us immediately at ytpartnership2427@gmail.com with your order number.</p>
    </Policy>
  );
}

export function Refunds() {
  return (
    <Policy title="Refund & Cancellation Policy">
      <h3>Cancellation</h3>
      <p>You can cancel your order anytime before it has been dispatched from our workshop. Once dispatched, the order cannot be cancelled, but you may be eligible for a return.</p>
      
      <h3>Returns</h3>
      <p>We accept returns within 7 days of delivery only for items that are defective or damaged upon arrival. Due to the sensitive nature of electronic components (susceptibility to ESD and improper wiring), we cannot accept returns for components that have been soldered, modified, or damaged due to incorrect usage.</p>
      
      <h3>Process</h3>
      <p>To initiate a return, email us with your order number and a clear description (with photos/videos) of the defect. If approved, we will provide a return shipping address. We will inspect the returned item and, upon verification of the defect, issue a replacement or a full refund to your original payment method.</p>
    </Policy>
  );
}

```

---

## pages/not-found.tsx

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

```
