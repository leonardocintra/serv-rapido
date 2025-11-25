import Section from "./ui/Section";
import Card from "./ui/Card";

export default function Services() {
  const materiaisConstrucao = [
    {
      image: "/images/materiais/cimento-areia-brita.jpg",
      title: "Cimento, Areia e Brita",
      description: "Materiais básicos de qualidade para sua fundação",
    },
    {
      image: "/images/materiais/blocos-tijolos.png",
      title: "Tijolos e Blocos",
      description: "Diversos tipos e tamanhos para sua construção",
    },
    {
      image: "/images/materiais/vergalhoes.jpg",
      title: "Ferro e Vergalhões",
      description: "Estrutura forte e segura para sua obra",
    },
    {
      image: "/images/materiais/telhas.png",
      title: "Telhas",
      description: "Variedade de telhas para cobertura",
    },
    {
      image: "/images/materiais/madeiras.png",
      title: "Madeiras",
      description: "Madeiras de qualidade para construção",
    },
    {
      image: "/images/materiais/cal-argamassa.jpg",
      title: "Cal e Argamassa",
      description: "Produtos para acabamento e revestimento",
    },
  ];

  const acabamentos = [
    {
      image: "/images/materiais/pisos-revestimentos.png",
      title: "Pisos e Revestimentos",
      description: "Ampla variedade de pisos e azulejos",
    },
    {
      image: "/images/materiais/tintas.png",
      title: "Tintas",
      description: "Tintas de qualidade para interior e exterior",
    },
    {
      image: "/images/materiais/loucas-metais.png",
      title: "Louças e Metais",
      description: "Acabamentos para banheiro e cozinha",
    },
    {
      image: "/images/materiais/portas-janelas.png",
      title: "Portas e Janelas",
      description: "Diversos modelos e tamanhos",
    },
    {
      image: "/images/materiais/material-eletrico.jpg",
      title: "Material Elétrico e Hidráulico",
      description: "Tudo para instalações elétricas e hidráulicas",
    },
    {
      image: "/images/materiais/ferramentas.jpg",
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
              image={item.image}
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
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
