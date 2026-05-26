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
