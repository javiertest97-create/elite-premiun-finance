import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(
        startCount + (end - startCount) * easeOutCubic(percentage)
      );
      
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-navy-primary mb-2">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
};

const TrustSection = () => {
  const stats = [
    {
      end: 15,
      suffix: "+",
      label: "Years of Experience",
      description: "Trusted expertise in premium finance",
    },
    {
      end: 98,
      suffix: "%",
      label: "Clients Satisfied",
      description: "Exceptional service satisfaction rate",
    },
    {
      end: 100,
      suffix: "%",
      label: "Safety Guaranteed",
      description: "Complete security for your investments",
    },
    {
      end: 5,
      suffix: ".0",
      label: "Client Rating",
      description: "Outstanding client testimonials",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary mb-4">
            Trusted by Thousands of{" "}
           <span className="font-serif bg-yellow-400 text-white rounded-lg px-3 py-1 inline-block shadow-md align-middle">
                Satisfaced Clients
              </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of clients who trust us with their financial future.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-premium transition-smooth hover-lift"
            >
              <Counter 
                end={stat.end} 
                suffix={stat.suffix}
                duration={2000 + index * 200}
              />
              <h3 className="text-lg font-semibold text-navy-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-navy-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gold-primary rounded-full"></div>
            </div>
            <span className="font-medium">SEC Registered</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-navy-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gold-primary rounded-full"></div>
            </div>
            <span className="font-medium">FDIC Insured</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-navy-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gold-primary rounded-full"></div>
            </div>
            <span className="font-medium">BBB Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;