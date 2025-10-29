import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slideshow {
  id: string;
  title?: string | null;
  description?: string | null;
  image_url: string;
  link_url?: string | null;
  display_order?: number;
  is_active?: boolean;
}

export const HeroSlideshow = () => {
  const [slides, setSlides] = useState<Slideshow[]>([]);
  const [current, setCurrent] = useState(0);

  // fetch active slides
  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from("slideshows")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) console.error(error);
      setSlides(data || []);
    };

    fetchSlides();
  }, []);

  // auto play every 5s
  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="
        fixed inset-0 z-0
        w-full h-screen
        overflow-hidden
        before:absolute before:inset-0 before:bg-black/40 before:z-10
      "
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.image_url}
          alt={slide.title || 'Slideshow'}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${idx === current ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      {/* Text Overlay */}
      <div className="absolute bottom-24 left-8 md:left-20 z-20 text-white max-w-2xl drop-shadow-lg">
        {slides[current].title && (
          <h2 className="text-3xl md:text-6xl italic font-semibold mb-4 tracking-wide">
            {slides[current].title}
          </h2>
        )}
        {slides[current].description && (
          <p className="text-base md:text-xl italic mb-6 opacity-90">
            {slides[current].description}
          </p>
        )}
        {slides[current].link_url && (
          <Button
            asChild
            className="bg-white/80 text-black hover:bg-white transition-all duration-300 shadow-lg"
          >
            <a
              href={slides[current].link_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse Products
            </a>
          </Button>
        )}
      </div>

      {/* Controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
