import React from "react";

const Instructor = () => {
  return (
    <section className="bg-white text-black w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555]">NUESTRO INSTRUCTOR</div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img src="/assets/Instructor.avif" alt="Nuestro Instructor" className="w-full h-full object-cover" />

        <div className="flex flex-col justify-end border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 pt-14">
          <div className="mb-6 lg:mb-8 lg:px-12">
            <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4">
              UN LEGADO <br /> DE VICTORIAS
            </h1>
            <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
              Mauro Sergio no solo ha sido múltiple campeón internacional. Ha sido también el mentor de los primeros cinturones negros en Costa Rica, y el responsable de difundir el Jiu Jitsu auténtico en Centroamérica, contando con logros y títulos en campeonatos como:          </p>
          </div>

          <div className="grid grid-cols-3 text-center border-[#7D7D7D]/50 border-t">
            <div className="border-r border-[#7D7D7D]/50 lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[8rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none">7</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg">Veces campeón Paulista<br />InterGracie</p>
            </div>
            <div className="border-r border-[#7D7D7D]/50 lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[8rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none">5</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg">Veces campeón<br />en MMA</p>
            </div>
            <div className="lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[8rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none">2°</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg">Lugar en Mundial<br />Master Seniors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor; 