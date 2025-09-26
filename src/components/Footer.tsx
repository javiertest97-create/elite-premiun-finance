import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ChevronUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive the latest financial insights and updates.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Premium Financing", href: "#services" },
      { name: "Wealth Management", href: "#services" },
      { name: "Financial Planning", href: "#services" },
      { name: "Investment Advisory", href: "#services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-navy-primary text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              
              <a href="#home" className="flex items-center space-x-3">
            <img
              src="logo_elite.png"
              alt="logo_elite"
              className="w-[240px] h-auto p-12 m-12"
            />
          </a><div className="flex flex-col">
                
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner in premium finance. Empowering individuals and businesses 
              with expert financial guidance and tailored solutions for lasting success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-white/80 hover:text-gold-primary transition-smooth"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a 
                href="mailto:info@elitepremium.com"
                className="flex items-center space-x-3 text-white/80 hover:text-gold-primary transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span>info@elitepremium.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>1429 Financial Ave, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest financial insights and market updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold-primary focus:ring-gold-primary"
                required
              />
              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-gold-primary hover:bg-white/20 transition-smooth"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © 2024 Elite Premium Finance Inc. All rights reserved.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Licensed Financial Services Provider | NMLS ID: 123456
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-gold-primary transition-smooth text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold hover:shadow-premium transition-smooth z-40 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-navy-primary group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;