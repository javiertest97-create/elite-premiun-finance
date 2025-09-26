import { 
  Globe, 
  Calculator, 
  CreditCard, 
  Zap, 
  Bell, 
  Shield,
  TrendingUp,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Online Accounts",
      description: "Easily access and manage your financing accounts through our secure online portal. View balances, track transactions, and stay updated on your financial progress in real time.",
    },
    {
      icon: Calculator,
      title: "Instant Quoting",
      description: "Get instant and accurate premium finance quotes at your fingertips. Our online system helps you make quick, informed decisions without the wait.",
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      description: "Secure and convenient online payment processing with multiple payment options. Schedule payments and manage your financial obligations effortlessly.",
    },
    {
      icon: Zap,
      title: "Automatic Payments",
      description: "Set up automated payment schedules to ensure your obligations are met on time. Never miss a payment with our reliable automation system.",
    },
    {
      icon: TrendingUp,
      title: "ACH Funding",
      description: "Streamline your funding process with direct ACH transfers. Fast, reliable, and efficient funding ensures smooth handling of your financial obligations.",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Stay informed with instant E-Alert and text notifications about your account activity, payment due dates, and important account updates.",
    },
    {
      icon: Shield,
      title: "Premium Protection",
      description: "Comprehensive protection for your investments with our advanced security measures and insurance coverage options.",
    },
    {
      icon: Users,
      title: "Personal Advisory",
      description: "Dedicated financial advisors providing personalized guidance and strategic planning tailored to your unique financial goals.",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-light/20 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary mb-6">
            Services We{" "}
            <span className="font-serif bg-yellow-400 text-white rounded-lg px-3 py-1 inline-block shadow-md align-middle">
                Provide
              </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Elite Premium Finance Inc., we simplify financial management by offering modern, 
            reliable, and accessible solutions. Our services are designed to give you control, 
            flexibility, and confidence in managing your finances anytime, anywhere.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-premium transition-smooth hover-lift"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:shadow-gold transition-smooth">
                <service.icon className="w-7 h-7 text-navy-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-navy-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="max-w-2xl mx-auto p-8 lg:p-12 bg-white/60 backdrop-blur-sm rounded-3xl shadow-premium">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experience the difference of working with a premium financial services provider. 
              Let us help you achieve your financial goals with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-premium text-white px-8 py-4 rounded-lg font-semibold shadow-premium hover:shadow-gold transition-smooth hover:opacity-90"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-accent text-accent bg-transparent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;