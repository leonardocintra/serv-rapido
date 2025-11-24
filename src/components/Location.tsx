import Section from "./ui/Section";
import { MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <Section background="gray" id="localizacao">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nossa Localização
        </h2>
        <p className="text-lg text-gray-600">
          Visite nossa loja em Ibiraci -MG
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Informações de Contato
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                <p className="text-gray-600">
                  Av. Cesar Elias Jorge, 843
                  <br />
                  Centro - Ibiraci - MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/553535441402"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  (35) 3544-1402
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Google Maps */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.5391750825074!2d-47.12538218302414!3d-20.46645108052783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0c808671d1837%3A0xbe4c42eed9fc915!2sServ%20R%C3%A1pido%20Materiais%20Para%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1763999868062!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Localização Serv Rápido"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
