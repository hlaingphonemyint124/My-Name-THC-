import { Navbar } from "@/components/Navbar";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Slideshow - Full Screen */}
      <HeroSlideshow />

      {/* Legal Disclaimer */}
      <section className="py-8 bg-secondary/30 border-t border-border">
        <div className="container px-4">
          <p className="text-center text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Legal Notice:</strong> My Name THC operates in compliance with Thai cannabis regulations. 
            For adults 21+ only. Please verify local laws regarding cannabis use and possession. 
            Always consume responsibly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
