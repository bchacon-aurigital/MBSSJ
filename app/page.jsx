"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;