import { Navbar } from "@/components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-card border-border hover:border-accent transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">thcmyname@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border hover:border-accent transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">0973595888</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border hover:border-accent transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">9/10, Hussadhisawee Rd, Tambon Chang Phueak, Mueang Chiang Mai District, Chiang Mai 50300</p>
            </CardContent>
          </Card>

        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                <p className="leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">General Inquiries</h3>
                <p className="leading-relaxed">
                  For general questions about strains, effects, or our platform, please email us at 
                  thcmyname@gmail.com. We typically respond within 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Educational Resources</h3>
                <p className="leading-relaxed">
                  Interested in learning more about cannabis? We're here to help! Contact us for 
                  information about strains, consumption methods, effects, and responsible use.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 bg-secondary/30 rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Legal Notice:</strong> My Name THC operates in compliance with Thai cannabis regulations. 
              This platform is for educational and informational purposes only. For adults 21+ only. 
              Please verify local laws regarding cannabis use and possession.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
