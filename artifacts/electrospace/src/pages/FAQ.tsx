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
