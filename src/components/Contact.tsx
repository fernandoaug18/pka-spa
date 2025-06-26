
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Necesitas Nuestros Productos?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Solicita tu cotización y déjanos ser tu socio estratégico. Atendemos tanto 
            organismos públicos como clientes particulares en todo Chile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-purple-100">ventas@pekaspa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-purple-100">+56 9 XXXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cobertura</h4>
                    <p className="text-purple-100">Todo Chile - Entregas Seguras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Solicitar Cotización</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Nombre / Empresa" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-purple-400"
                />
                <Input 
                  placeholder="Teléfono" 
                  type="tel"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-purple-400"
                />
              </div>
              <Input 
                placeholder="Email" 
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-purple-400"
              />
              <Textarea 
                placeholder="Cuéntanos qué productos necesitas (alimentos, aseo, oficina)..." 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-purple-400 resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Enviar Solicitud
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
