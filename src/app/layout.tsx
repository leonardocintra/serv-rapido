import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serv Rápido - Materiais de Construção em Ibiraci/MG",
  description:
    "Tudo para sua obra está aqui! Materiais de construção, acabamentos e ferramentas com qualidade, rapidez e os melhores preços em Ibiraci/MG.",
  keywords:
    "materiais de construção, Ibiraci, construção, cimento, areia, tijolos, acabamentos, tintas, ferramentas",
  openGraph: {
    title: "Serv Rápido - Materiais de Construção em Ibiraci/MG",
    description: "Tudo para sua obra está aqui! Qualidade e rapidez em materiais de construção.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
