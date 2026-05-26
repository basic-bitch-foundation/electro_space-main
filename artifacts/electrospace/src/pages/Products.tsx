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
