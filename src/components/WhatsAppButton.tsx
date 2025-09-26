import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about Elite Premium Finance services. Could you please provide me with more information?"
    );
    const whatsappUrl = `https://wa.me/15551234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        <div
          className={`absolute right-16 top-1/2 -translate-y-1/2 bg-navy-primary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
            isHovered 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-navy-primary rotate-45 -translate-y-1/2"></div>
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;