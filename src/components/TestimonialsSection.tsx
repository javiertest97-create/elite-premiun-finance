import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      company: "Johnson Enterprises",
      rating: 5,
      text: "Elite Premium Finance transformed our business financing strategy. Their expertise and personalized approach helped us secure funding at rates we never thought possible. The team's professionalism and attention to detail are unmatched.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Rodriguez",
      role: "Real Estate Investor", 
      company: "Rodriguez Holdings",
      rating: 5,
      text: "Working with Elite has been a game-changer for my investment portfolio. Their premium financing solutions allowed me to expand my real estate holdings while maintaining excellent cash flow. I highly recommend their services.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Chen",
      role: "Financial Planner",
      company: "Chen Financial Group",
      rating: 5,
      text: "As a financial professional myself, I appreciate Elite's thorough approach and transparent communication. They've helped my clients achieve their financial goals with innovative solutions and exceptional service.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Thompson",
      role: "Corporate Executive",
      company: "Thompson Industries",
      rating: 5,
      text: "Elite's premium financing services have been instrumental in our company's growth. Their team understands complex financial structures and delivers solutions that align perfectly with our business objectives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-light/20 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary mb-6">
            What Our Clients{" "}
             <span className="font-serif bg-yellow-400 text-white rounded-xl px-4 py-2 inline-block shadow-md align-middle border-2 border-yellow-500">
              Say About Us
              </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience with Elite Premium Finance.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-subtle rounded-3xl shadow-premium p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-navy-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold-primary text-gold-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-navy-primary leading-relaxed mb-8 font-medium">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover shadow-soft"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-navy-primary text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-gold-primary text-sm font-medium">
                      {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentSlide ? "bg-gold-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="text-3xl font-bold text-navy-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="text-3xl font-bold text-navy-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Financed Successfully</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="text-3xl font-bold text-navy-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;