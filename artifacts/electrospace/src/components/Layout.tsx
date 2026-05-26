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
