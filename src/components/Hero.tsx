import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/5 via-transparent to-gold-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg mb-6 border border-yellow-300">
              <span className="text-sm font-semibold text-navy-primary">⭐⭐⭐⭐⭐ 5.0 Satisfied Clients</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-primary leading-tight mb-6 drop-shadow-lg">
              Your Trusted Partner in{" "}
              <span className="font-serif bg-yellow-400 text-white rounded-xl px-4 py-2 inline-block shadow-md align-middle border-2 border-yellow-500">
                Premium Finance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-navy-primary/80 mb-8 leading-relaxed max-w-lg drop-shadow">
              Empowering individuals and businesses with expert financial guidance, tailored solutions, 
              and strategies that secure lasting success.
            </p>

            {/* Value Proposition */}
            <div className="mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-soft">
              <p className="text-navy-primary font-medium">
                We deliver peace of mind! Our experienced advisors specialize in counseling, planning, 
                and customized financial solutions designed to help you protect, grow, and manage your wealth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="premium" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Schedule Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outlineGold" 
                size="xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src={heroImage}
                alt="Premium Finance Solutions - Stacked gold coins representing financial growth and prosperity"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/20 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-gold animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-gold animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Safety Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;