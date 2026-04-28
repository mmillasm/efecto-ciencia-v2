import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Opinion from "@/components/Opinion/Opinion";
import Actualidad from "@/components/Actualidad/Actualidad";
import Categorias from "@/components/Categorias/Categorias";
import About from "@/components/About/About";
import Instagram from "@/components/Instagram/Instagram";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Opinion />
      <Actualidad />
      <Categorias />
      <About />
      <Instagram />
      <Footer />
    </>
  );
}
