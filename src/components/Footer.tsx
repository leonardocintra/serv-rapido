import Image from "next/image";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <Image
                src="/logo.jpg"
                alt="Serv Rápido Logo"
                width={200}
                height={100}
                className="w-48 h-auto"
              />
            </div>
            <p className="text-gray-400">
              Tudo para sua obra está aqui. Qualidade, rapidez e os melhores
              preços em materiais de construção.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">WhatsApp:</p>
                  <a
                    href="https://wa.me/553535441402"
                    className="text-green-400 hover:text-green-300"
                  >
                    (35) 3544-1402
                  </a>
                  <p className="text-gray-500 text-sm mt-2">
                    Telefones adicionais:
                    <br />
                    (35) XXXX-XXXX
                    <br />
                    (35) XXXX-XXXX
                    <br />
                    (35) XXXX-XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Endereço:</p>
                  <p className="text-gray-400">
                    Av. Cesar Elias Jorge, 843
                    <br />
                    Centro - Ibiraci/MG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="flex items-start gap-3">
              <Clock className="flex-shrink-0 mt-1" size={20} />
              <div className="text-gray-400">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Sábado: 7h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/servrapido/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Serv Rápido - Todos os direitos
            reservados
          </p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://leonardocintra.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary transition-colors"
            >
              Leonardo Cintra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
