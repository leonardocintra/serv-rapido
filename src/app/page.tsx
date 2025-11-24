import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Location from "../components/Location";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Location />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
