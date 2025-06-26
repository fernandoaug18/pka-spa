
import { Sparkles, Heart, Users, Clock, Leaf, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Tratamientos Premium",
      description: "Servicios de spa de lujo con productos naturales y técnicas especializadas."
    },
    {
      icon: Heart,
      title: "Bienestar Integral",
      description: "Cuidamos tu bienestar físico, mental y emocional en cada sesión."
    },
    {
      icon: Users,
      title: "Terapeutas Expertos",
      description: "Equipo profesional certificado con años de experiencia en wellness."
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Abierto todos los días con citas disponibles en horarios convenientes."
    },
    {
      icon: Leaf,
      title: "Productos Naturales",
      description: "Utilizamos solo productos orgánicos y naturales para tu cuidado."
    },
    {
      icon: Award,
      title: "Excelencia Reconocida",
      description: "Premiados por nuestra calidad y servicio excepcional en la industria."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Por Qué Elegir Peka SPA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos tradición, innovación y cuidado personalizado para ofrecerte 
            una experiencia de spa única que transforma tu bienestar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
