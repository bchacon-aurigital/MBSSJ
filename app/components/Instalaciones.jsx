import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdShower } from "react-icons/md";

const SobreNosotros = () => {
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D] uppercase">Instalaciones</div>
      <div className="grid grid-cols-1">
      <img src="/assets/Instalaciones.avif" alt="Instalaciones" className="w-full max-h-[500px] object-cover border-[#7D7D7D]/50 border-t py-5" />

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:min-h-[550px]">
          <div className="lg:border-r border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
           <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center"><IoShieldCheckmark /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase mt-6 md:mt-12">COMODIDAD Y <br className="hidden md:block"/> SEGURIDAD TOTAL</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">Nuestra academia está ubicada dentro del Mall Terrazas de Lindora, un entorno moderno y seguro que brinda accesibilidad total para personas de todas las edades, contando con 2 horas de parqueo bajo techo completamente gratis, para entrenar sin importar el clima o la hora del día.</p>
          </div>

          <div className="lg:border-r border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center"><FaBookBookmark /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase mt-6 md:mt-12">TATAMI <br className="hidden md:block"/> PROFESIONAL</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">Entrená sobre una superficie segura, limpia y diseñada para absorber impactos, ideal tanto para principiantes como para atletas de alto rendimiento. Nuestro tatami cumple con los más altos estándares internacionales para que puedas aprender, rodar y competir con total confianza.</p>
          </div>

          <div className="lg:border-r border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center"><FaClock /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase mt-6 md:mt-12">ÁREA DE ESPERA <br className="hidden md:block"/> PARA PADRES</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">Tu familia también es parte de nuestra comunidad. Contamos con un espacio cómodo y tranquilo para que padres o acompañantes puedan esperar mientras sus hijos entrenan, fomentando así un ambiente de apoyo y pertenencia.</p>
          </div>

          <div className="border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center"><MdShower /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase mt-6 md:mt-12">DUCHAS Y <br className="hidden md:block"/> VESTUARIOS</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">Sabemos que tu tiempo es valioso. Por eso, nuestras instalaciones cuentan con duchas cómodas y vestuarios equipados, para que puedas entrenar sin preocuparte por lo que viene después. Perfecto para quienes vienen directo del trabajo o la escuela.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros; 