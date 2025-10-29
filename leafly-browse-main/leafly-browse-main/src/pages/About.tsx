import { Navbar } from "@/components/Navbar";
import { Leaf, Award, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            About My Name THC
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality medical-grade cannabis at fair local prices
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Leaf className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My Name THC offers high-quality, medical-grade cannabis and accessories at fair local prices. 
              Proudly serving customers throughout Thailand with trusted products and professional, reliable service.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-card rounded-xl p-8 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              We showcase only the finest, lab-tested strains that meet our rigorous quality standards.
            </p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Focused</h3>
            <p className="text-muted-foreground">
              Building a knowledgeable and responsible cannabis community through education.
            </p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Passion Driven</h3>
            <p className="text-muted-foreground">
              Our team consists of cannabis enthusiasts and experts who love what they do.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
