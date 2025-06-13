"use client";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const SobreNosotros = dynamic(() => import("./components/SobreNosotros"), {
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
      <Footer />
    </main>
  );
};

export default Home;