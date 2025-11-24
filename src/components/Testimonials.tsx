import Section from "./ui/Section";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rogério Pontes",
    role: "Cliente",
    content:
      "Ótimo atendimento, pessoal atencioso e capacitado,produtos de qualidade,tudo que precisar lá encontra, recomendo a todos!",
    rating: 5,
    image: "👷‍♂️",
  },
  {
    id: 2,
    name: "Eder Edim",
    role: "Cliente",
    content:
      "Um dos melhor lugares para comprar materiais de construção ,em Ibiraci MG .Lá você encontra de tudo ferramentas de todo tipos, areia grossa e fina ,cimento, tijolos, blocos ,ferragem vergalhão, hidráulicos tudo que você precisar em um preço bem acessivo e sem contar com uma equipe que expõem um melhor atendimento.Passa lá 👉👉Serve Rápido",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 3,
    name: "Isah Mendonça",
    role: "Cliente",
    content:
      "Essa empresa presta um ótimo atendimento. Grande variedade de produtos para construção e reforma! Preço justo e entrega rápida 👏🏻🙌🏻 …",
    rating: 5,
    image: "👨‍🔧",
  },
  {
    id: 4,
    name: "André Gomes",
    role: "Cliente",
    content:
      "Ótima localização e um mix de produtos variados para construção e reforma, sem contar com a agilidade na entrega rápida e monitorada. E o preço lá baixo, corre pro Serv Rápido!!!!!",
    rating: 5,
    image: "👩",
  },
];

export default function Testimonials() {
  return (
    <Section background="white" id="avaliacoes">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-lg text-gray-600">
          Confira a experiência de quem já confia na Serv Rápido
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl">
                {testimonial.image}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
