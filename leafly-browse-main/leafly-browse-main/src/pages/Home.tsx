import { Navbar } from "@/components/Navbar";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const Home = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Legal Disclaimer */}
      <section className="py-6 sm:py-8 bg-secondary/30 border-t border-border">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
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
