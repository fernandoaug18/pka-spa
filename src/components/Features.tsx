
import { Package, Shield, Users, Clock, Truck, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Productos de Calidad",
      description: "Alimentos, artículos de aseo y material de oficina con los más altos estándares."
    },
    {
      icon: Shield,
      title: "Transparencia Total",
      description: "Operamos de forma clara y ética en todos nuestros procesos comerciales."
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Escuchamos las necesidades reales de cada cliente con cercanía y profesionalismo."
    },
    {
      icon: Clock,
      title: "Entregas Oportunas",
      description: "Cumplimos con responsabilidad los tiempos acordados en cada pedido."
    },
    {
      icon: Truck,
      title: "Cobertura Nacional",
      description: "Atendemos organismos públicos y clientes particulares en todo Chile."
    },
    {
      icon: Award,
      title: "Compromiso Garantizado",
      description: "Entregamos lo prometido, siendo tu socio estratégico confiable."
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
            Somos tu socio estratégico que responde con eficiencia, cercanía y calidad, 
            mejorando tu experiencia de compra con soluciones prácticas y confiables.
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
