import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MisionVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent">
            Misión y Visión
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce nuestros propósitos y objetivos como empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">🌍 Misión</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brindar productos esenciales de primera necesidad —como alimentos, artículos de aseo y material de oficina— con altos estándares de calidad, atención personalizada y cumplimiento oportuno, mejorando así la experiencia de compra de nuestros clientes del sector público y privado.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-violet-500">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">🌟 Visión</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser una empresa reconocida a nivel nacional por su excelencia en servicio, confiabilidad y capacidad de respuesta, posicionándonos como líderes en el suministro integral para instituciones y consumidores individuales.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;
