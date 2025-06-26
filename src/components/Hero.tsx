
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-violet-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c51b76db-1499-4208-8f6e-d40ee42873a0.png" 
              alt="Peka SPA Logo" 
              className="mx-auto h-24 md:h-32 w-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent leading-tight">
            Bienvenido a
            <br />
            Peka SPA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tu socio estratégico en suministros. Ofrecemos alimentos, productos de aseo y artículos de 
            escritorio con calidad, eficiencia y atención personalizada para todo Chile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
