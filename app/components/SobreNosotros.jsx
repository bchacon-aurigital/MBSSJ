import React from "react";

const SobreNosotros = () => {
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D]">SOBRE NOSOTROS</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/20 border-t border-l-0 border-b border-r-0 py-14">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4">
            BIENVENIDO A <br /> MAURO SERGIO BJJ
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            En Mauro Sergio Brazilian Jiu Jitsu, no solo enseñamos defensa personal y técnicas de Jiu Jitsu. Te damos las herramientas para mejorar tu vida a través de la disciplina, el respeto y el crecimiento personal. Únete a nuestra comunidad y empieza tu camino hacia la excelencia hoy mismo.
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-black font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            AGENDAR SESIÓN
          </button>
        </div>

        <div className="grid grid-cols-2">
          <div className="border-l-0 md:border-l border-r border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">MÁS DE 30 AÑOS <br className="hidden md:block"/> DE EXPERIENCIA</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">Mauro Sergio, cinturón negro 5to Dan y con más de 30 años de experiencia, trajo el Jiu Jitsu brasileño a Costa Rica como el primer representante directo del linaje Gracie. Desde entonces, nuestra academia ha evolucionado para convertirse en un espacio inclusivo, que va más allá de ser solo un lugar para competir.</p>
          </div>

          <div className="border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">CREANDO <br className="hidden md:block"/> CAMPEONES EN LA VIDA</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">Nuestro enfoque va más allá de enseñar solo técnicas de combate. En nuestra academia promovemos valores como el respeto, la humildad, la disciplina, la constancia y la autorrealización. Cada clase es una oportunidad para crecer como persona, no solo como atleta.</p>
          </div>

          <div className="border-l-0 md:border-l border-r border-b border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">DEFENSA PERSONAL <br className="hidden md:block"/> PARA TODAS LAS EDADES</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">Creemos que todos deben sentirse seguros y empoderados. Nuestras clases te enseñan a defenderte de forma efectiva, mientras fortaleces cuerpo y mente. No importa tu edad ni tu experiencia: aquí encontrarás el apoyo para crecer desde el primer día.</p>
          </div>

          <div className="border-b border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20">BIENESTAR MÁS <br className="hidden md:block"/> ALLÁ DEL TATAMI</h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">Entrenar en Mauro Sergio BJJ no solo mejora tu condición física. Mejora tu confianza, enfoque y bienestar emocional. Muchos de nuestros alumnos han superado miedos, ansiedad y estrés gracias a la práctica constante de Jiu Jitsu en un ambiente positivo y motivador.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros; 