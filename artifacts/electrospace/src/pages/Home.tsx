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
