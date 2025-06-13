import React from "react";

const Comunidad = () => {
  return (
    <section className="bg-white text-black w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555]">ÚNETE A LA FAMILIA</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 py-14 order-last md:order-first">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4">
           ÚNETE A UNA <br /> COMUNIDAD QUE <br /> MARCA LA DIFERENCIA
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
          En MSBJJ celebramos tus logros, te acompañamos en tus retos y te animamos a seguir avanzando incluso cuando quieres rendirte. Realizamos eventos de graduación, convivios familiares, viajes a torneos y más. Cada experiencia dentro de la academia está pensada para fortalecer no solo tu técnica, sino tus lazos y tu motivación.
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            AGENDAR SESIÓN
          </button>
        </div>

        <img src="/assets/Comunidad.avif" alt="ÚNETE A LA FAMILIA" className="w-full h-full object-cover order-first md:order-last" />
      </div>
    </section>
  );
};

export default Comunidad; 