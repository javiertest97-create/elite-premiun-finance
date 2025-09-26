import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-premium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/20 via-transparent to-gold-primary/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-gold-secondary font-serif">
                Financial Future?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied clients who have achieved their financial goals with our premium services. 
              Take the first step towards financial excellence today.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gold-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-white/80 text-sm">
                Get expert advice tailored to your financial situation at no cost.
              </p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gold-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">
                Our dedicated team is available whenever you need assistance.
              </p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gold-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Process</h3>
              <p className="text-white/80 text-sm">
                Streamlined application process with fast approval times.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group shadow-gold hover:shadow-premium"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outlineGold" 
              size="xl"
              className="border-white/30 text-white hover:bg-white hover:text-navy-primary"
            >
              Call Us Now: +1 (555) 123-4567
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-navy-primary rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Licensed & Bonded</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-navy-primary rounded-full"></div>
              </div>
              <span className="text-sm font-medium">FDIC Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-navy-primary rounded-full"></div>
              </div>
              <span className="text-sm font-medium">A+ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;