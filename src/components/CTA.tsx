import Button from "./ui/Button";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Precisando de materiais para sua obra?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Entre em contato agora e receba um orçamento personalizado!
        </p>

        <Button
          href="https://wa.me/553535441402"
          className="text-primary hover:bg-gray-100 hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 text-xl px-10 py-5 font-bold"
        >
          <MessageCircle size={28} />
          Falar com Especialista
        </Button>
      </div>
    </section>
  );
}
