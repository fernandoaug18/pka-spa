
import { Heart, Globe, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tu Página Web
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creamos experiencias digitales excepcionales que conectan marcas con sus audiencias. 
              Nuestro enfoque combina diseño innovador con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Diseño UX/UI</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Consultoría</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Equipo</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tu Página Web. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>y</span>
            <Globe className="w-4 h-4 text-blue-400" />
            <span>para el mundo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
