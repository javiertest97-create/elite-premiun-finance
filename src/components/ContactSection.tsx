import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Thank you for contacting Elite Premium Finance.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@elitepremium.com",
      href: "mailto:info@elitepremium.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "1429 Financial Ave, New York, NY 10001",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-light/20 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary mb-6">
            Ready to Start Your{" "}
           <span className="font-serif bg-yellow-400 text-white rounded-lg px-3 py-1 inline-block shadow-md align-middle">
                Financial Journey?
              </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation. Our expert team is ready to help you achieve 
            your financial goals with personalized solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-premium p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-primary mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-gray-300 focus:border-accent focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-gray-300 focus:border-accent focus:ring-accent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-gray-300 focus:border-accent focus:ring-accent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[120px] border-gray-300 focus:border-accent focus:ring-accent resize-none"
                    placeholder="Tell us about your financial goals and how we can help you..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-premium p-8">
              <h3 className="text-xl font-bold text-navy-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-navy-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-navy-primary mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-smooth"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-gradient-premium rounded-3xl shadow-premium p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-navy-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Quick WhatsApp Chat
                  </h3>
                  <p className="text-white/80 text-sm">
                    Get instant support
                  </p>
                </div>
              </div>
              
              <Button 
                variant="gold" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://wa.me/15551234567', '_blank')}
              >
                Start WhatsApp Chat
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-6 border-l-4 border-accent">
              <h4 className="font-semibold text-navy-primary mb-2">
                Emergency Support
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                For urgent financial matters outside business hours:
              </p>
              <a
                href="tel:+15551234567"
                className="text-accent hover:text-accent-hover font-medium transition-smooth"
              >
                +1 (555) 123-4567 ext. 911
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-premium p-8">
            <h3 className="text-2xl font-bold text-navy-primary mb-6 text-center">
              Visit Our Office
            </h3>
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682143987456!2d-73.98976908459418!3d40.74881817932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Premium Finance Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;