
import { Globe, Star } from "lucide-react";

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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">🌍 Misión</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brindar productos esenciales de primera necesidad —como alimentos, artículos de aseo y material de oficina— con altos estándares de calidad, atención personalizada y cumplimiento oportuno, mejorando así la experiencia de compra de nuestros clientes del sector público y privado.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-violet-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">🌟 Visión</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser una empresa reconocida a nivel nacional por su excelencia en servicio, confiabilidad y capacidad de respuesta, posicionándonos como líderes en el suministro integral para instituciones y consumidores individuales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;
