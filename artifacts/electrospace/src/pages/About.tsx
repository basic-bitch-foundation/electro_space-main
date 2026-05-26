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
