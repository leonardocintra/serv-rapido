import Section from "./ui/Section";
import Card from "./ui/Card";
import { Award, Zap, Package, Headphones } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award size={48} />,
      title: "Qualidade Garantida",
      description:
        "Trabalhamos apenas com as melhores marcas e produtos certificados",
    },
    {
      icon: <Zap size={48} />,
      title: "Atendimento Rápido",
      description:
        "Entrega ágil e eficiente para não atrasar sua obra",
    },
    {
      icon: <Package size={48} />,
      title: "Grande Variedade",
      description:
        "Tudo que você precisa para sua construção em um só lugar",
    },
    {
      icon: <Headphones size={48} />,
      title: "Atendimento Especializado",
      description:
        "Equipe pronta para ajudar você a escolher os melhores produtos",
    },
  ];

  return (
    <Section background="gray" id="sobre">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Sobre a Serv Rápido
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Há anos servindo Ibiraci e região com os melhores materiais de
          construção. Nossa missão é fornecer produtos de qualidade com
          atendimento rápido e preços justos para que sua obra seja um sucesso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}
