
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent">
            Quiénes Somos
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">👥 ¿Quiénes somos?</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Peka SPA, nos dedicamos a la venta de alimentos, productos de aseo y artículos de escritorio, entregando soluciones prácticas y confiables tanto a organismos públicos como a clientes particulares en todo Chile. Nuestro compromiso es ser un socio estratégico que responda con eficiencia, cercanía y calidad.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
