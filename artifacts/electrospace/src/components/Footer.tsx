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
