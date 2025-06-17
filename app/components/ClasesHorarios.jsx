import React from "react";

const ClasesHorarios = () => {
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D]">CLASES & HORARIOS</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/20 border-t border-l-0 border-b border-r-0 py-14">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4">
            ENTRENA EN EL <br /> HORARIO QUE MEJOR <br /> SE ADAPTA A TU VIDA
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            Ya sea temprano en la mañana, al final del trabajo o en las tardes con tus hijos, en MSBJ tenemos un horario que se ajusta a tu rutina. Ofrecemos clases para niños, adultos, mujeres y competidores en distintos horarios durante la semana.
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            AGENDAR SESIÓN
          </button>
        </div>

        <div className="lg:border lg:border-[#7D7D7D]/20">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">
                BRAZILIAN <br className="hidden md:block" /> JIU-JITSU
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4">
                Lunes a Jueves - <span className="text-[#7D7D7D]/70">6AM / 6PM</span><br />
                Viernes - <span className="text-[#7D7D7D]/70">12MD</span>
              </p>
            </div>

            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">
                SUBMISSION <br className="hidden md:block" /> WRESTLING
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4">
                Lunes y Miércoles - <span className="text-[#7D7D7D]/70">12MD</span><br />
                Sábados - <span className="text-[#7D7D7D]/70">11AM</span>
              </p>
            </div>

            <div className="border-b border-[#7D7D7D]/20 lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">
                OPEN <br className="hidden md:block" /> MAT
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4">
                Viernes - <span className="text-[#7D7D7D]/70">6AM / 6PM</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-t border-[#7D7D7D]/20">
            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">
                CLASES <br className="hidden md:block" /> KIDS BJJ
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4">
                Martes - <span className="text-[#7D7D7D]/70">3PM (3 a 6 años)<br /></span>
                Martes - <span className="text-[#7D7D7D]/70">4PM (6 a 12 años)<br /></span>
                Jueves - <span className="text-[#7D7D7D]/70">4PM (Todas las edades)<br /></span>
                Sábado - <span className="text-[#7D7D7D]/70">10AM (Todas las edades)<br /></span>
              </p>
            </div>

            <div className="p-3 md:p-6 lg:border-b-0 border-b border-[#7D7D7D]/20 flex flex-col lg:justify-end">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">
                CLASES <br className="hidden md:block" /> FUNDAMENTALS <br className="hidden md:block" /> BRAZILIAN JIU JITSU
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4">
                Viernes - <span className="text-[#7D7D7D]/70">6AM / 6PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClasesHorarios;