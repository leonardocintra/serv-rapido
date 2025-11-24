import Image from "next/image";
import Button from "./ui/Button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
          alt="Materiais de Construção"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Heading with Bold Styling */}
        <h1 className="text-6xl md:text-8xl font-black italic mb-6 tracking-wider" style={{ 
          textShadow: '4px 4px 8px rgba(0,0,0,0.5)'
        }}>
          SERV RÁPIDO
        </h1>
        
        <div className="inline-block px-6 py-3 mb-8" style={{
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-wide" style={{
            color: 'white',
            WebkitTextStroke: '2px #0203a1',
            textShadow: 'none'
          }}>
            MATERIAIS DE CONSTRUÇÃO
          </h2>
        </div>
        
        {/* Phone Number */}
        <p className="text-3xl md:text-4xl font-bold mb-8 tracking-wider" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          (35) 3544-1402
        </p>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold mb-4 text-white">
          Tudo para sua obra está aqui
        </p>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-white/90">
          Qualidade, rapidez e os melhores preços em materiais de construção em
          Ibiraci/MG
        </p>

        {/* CTA Button */}
        <Button
          variant="secondary"
          href="https://wa.me/553535441402"
          className="text-xl px-8 py-4"
        >
          <MessageCircle size={28} />
          Faça seu Orçamento no WhatsApp
        </Button>
      </div>
    </section>
  );
}
