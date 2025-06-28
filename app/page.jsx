"use client";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const SobreNosotros = dynamic(() => import("./components/SobreNosotros"), {
  ssr: false,
});

const Instructor = dynamic(() => import("./components/Instructor"), {
  ssr: false,
});

const Instalaciones = dynamic(() => import("./components/Instalaciones"), {
  ssr: false,
});

const TiendaProductos = dynamic(() => import("./components/TiendaProductos"), {
  ssr: false,
});

const Torneos = dynamic(() => import("./components/Torneos"), {
  ssr: false,
});

const ClasesHorarios = dynamic(() => import("./components/ClasesHorarios"), {
  ssr: false,
});

const Comunidad = dynamic(() => import("./components/Comunidad"), {
  ssr: false,
});

const Encuentranos = dynamic(() => import("./components/Encuentranos"), {
  ssr: false,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="">
      <Hero />
      <SobreNosotros />
      <Instructor />
      <Instalaciones />
      <TiendaProductos />
      <Torneos />
      <ClasesHorarios />
      <Comunidad />
      <Encuentranos />
      <Footer />
    </main>
  );
};

export default Home;