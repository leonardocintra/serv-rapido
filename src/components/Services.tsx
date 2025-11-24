import Section from "./ui/Section";
import Card from "./ui/Card";
import {
  Hammer,
  Blocks,
  Wrench,
  Home,
  Trees,
  Droplet,
  Paintbrush,
  DoorOpen,
  Lightbulb,
  Drill,
} from "lucide-react";

export default function Services() {
  const materiaisConstrucao = [
    {
      icon: <Blocks size={40} />,
      title: "Cimento, Areia e Brita",
      description: "Materiais básicos de qualidade para sua fundação",
    },
    {
      icon: <Blocks size={40} />,
      title: "Tijolos e Blocos",
      description: "Diversos tipos e tamanhos para sua construção",
    },
    {
      icon: <Wrench size={40} />,
      title: "Ferro e Vergalhões",
      description: "Estrutura forte e segura para sua obra",
    },
    {
      icon: <Home size={40} />,
      title: "Telhas",
      description: "Variedade de telhas para cobertura",
    },
    {
      icon: <Trees size={40} />,
      title: "Madeiras",
      description: "Madeiras de qualidade para construção",
    },
    {
      icon: <Hammer size={40} />,
      title: "Cal e Argamassa",
      description: "Produtos para acabamento e revestimento",
    },
  ];

  const acabamentos = [
    {
      icon: <Blocks size={40} />,
      title: "Pisos e Revestimentos",
      description: "Ampla variedade de pisos e azulejos",
    },
    {
      icon: <Paintbrush size={40} />,
      title: "Tintas",
      description: "Tintas de qualidade para interior e exterior",
    },
    {
      icon: <Droplet size={40} />,
      title: "Louças e Metais",
      description: "Acabamentos para banheiro e cozinha",
    },
    {
      icon: <DoorOpen size={40} />,
      title: "Portas e Janelas",
      description: "Diversos modelos e tamanhos",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Material Elétrico e Hidráulico",
      description: "Tudo para instalações elétricas e hidráulicas",
    },
    {
      icon: <Drill size={40} />,
      title: "Ferramentas",
      description: "Ferramentas profissionais para sua obra",
    },
  ];

  return (
    <Section background="white" id="servicos">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nossos Produtos
        </h2>
        <p className="text-lg text-gray-600">
          Tudo que você precisa para sua obra, do início ao acabamento
        </p>
      </div>

      {/* Materiais de Construção */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Materiais de Construção
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materiaisConstrucao.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Acabamentos */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
          Acabamentos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acabamentos.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
