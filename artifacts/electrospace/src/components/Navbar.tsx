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
