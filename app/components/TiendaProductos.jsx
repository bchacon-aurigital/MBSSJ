import React from "react";

const TiendaProductos = () => {
  return (
    <section className="bg-white text-black w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555]">TIENDA & PRODUCTOS</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 py-14 order-last md:order-first">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4 ">
          CONSIGUE EQUIPO  <br /> DE LA MÁS ALTA CALIDAD
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
          En la tienda de Fighter District encontrarás todo lo que necesitas para entrenar con comodidad, estilo y autenticidad. Desde kimonos y rashguards hasta camisetas, accesorios y equipo exclusivo de las marcas mas aclamadas a nivel mundial.Entrena con lo mejor, vístete con propósito y lleva contigo el espíritu de MSBJJ dentro y fuera del tatami.
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            VER PRODUCTOS
          </button>
        </div>

        <img src="/assets/TiendaProductos.avif" alt="TIENDA & PRODUCTOS" className="w-full h-full object-cover order-first md:order-last" />
      </div>
    </section>
  );
};

export default TiendaProductos; 