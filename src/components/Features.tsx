
import { Zap, Shield, Users, Smartphone, Globe, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Rendimiento Rápido",
      description: "Sitios web optimizados que cargan en segundos y ofrecen una experiencia fluida."
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección completa con las mejores prácticas de seguridad web implementadas."
    },
    {
      icon: Users,
      title: "Centrado en el Usuario",
      description: "Diseños intuitivos que priorizan la experiencia del usuario en cada interacción."
    },
    {
      icon: Smartphone,
      title: "Diseño Responsivo",
      description: "Perfecta adaptación a todos los dispositivos: móvil, tablet y escritorio."
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Optimización para audiencias internacionales con soporte multi-idioma."
    },
    {
      icon: HeartHandshake,
      title: "Soporte Dedicado",
      description: "Equipo de expertos disponible para ayudarte en cada paso del camino."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos creatividad, tecnología y estrategia para crear soluciones web 
            que superan expectativas y generan resultados reales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
