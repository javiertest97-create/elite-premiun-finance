import { Button } from "@/components/ui/button";
import { Shield, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Your financial safety is our top priority with bank-level security protocols.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customized financial strategies designed specifically for your unique goals.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced financial advisors dedicated to your success and growth.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "15+ years of helping clients achieve their financial objectives successfully.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-gold-light/20 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Elite Premium Finance
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary mb-6">
                Your Partner in{" "}
               <span className="font-serif bg-yellow-400 text-white rounded-lg px-3 py-1 inline-block shadow-md align-middle">
                Financial Excellence
              </span>
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="mb-4">
                At Elite Premium Finance Inc., we believe financial stability is the foundation of lasting success. 
                As a trusted U.S.-based financial services provider, our mission is to empower individuals, families, 
                and businesses with expert advice, tailored strategies, and innovative solutions.
              </p>
              <p className="mb-4">
                With years of industry expertise, we specialize in guiding clients through today's complex financial 
                landscape, from wealth management and premium financing to counseling and customized planning.
              </p>
              <p>
                When you partner with Elite, you gain more than a financial advisor—you gain a committed partner 
                who understands your goals and works tirelessly to achieve them.
              </p>
            </div>

            <Button 
              variant="premium" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-subtle rounded-2xl shadow-soft hover:shadow-premium transition-smooth hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-navy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-premium rounded-3xl shadow-premium">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              "To empower our clients with the knowledge, tools, and personalized strategies they need to achieve 
              financial independence and build lasting wealth. We are committed to delivering exceptional service, 
              maintaining the highest standards of integrity, and creating long-term partnerships based on trust and results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;