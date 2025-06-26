
import { Heart, Package, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Peka SPA
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tu socio estratégico en suministros. Ofrecemos soluciones prácticas y confiables 
              para organismos públicos y clientes particulares en todo Chile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Productos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Alimentos No Perecibles</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Productos de Aseo</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Artículos de Oficina</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Insumos Sanitarios</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Material Administrativo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Quiénes Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Misión y Visión</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Licitaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Peka SPA. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Suministros de calidad con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>y</span>
            <Package className="w-4 h-4 text-purple-400" />
            <span>para Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
