import React from "react";

const SobreNosotros = () => {
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-sm">SOBRE NOSOTROS</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna izquierda */}
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-impact font-bold text-red-600 mb-4 leading-tight">
            BIENVENIDO A <br /> MAURO SERGIO BJJ
          </h1>
          <p className="mb-6 text-base md:text-lg">
            En Mauro Sergio Brazilian Jiu Jitsu, no solo enseñamos defensa personal y técnicas de Jiu Jitsu. Te damos las herramientas para mejorar tu vida a través de la disciplina, el respeto y el crecimiento personal. Únete a nuestra comunidad y empieza tu camino hacia la excelencia hoy mismo.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-all w-fit">
            AGENDAR SESIÓN
          </button>
        </div>
        {/* Grid derecha */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6">
            <h2 className="text-xl md:text-2xl font-impact font-bold text-red-600 mb-2 uppercase">MÁS DE 30 AÑOS DE EXPERIENCIA</h2>
            <p>Mauro Sergio, cinturón negro 5to Dan y con más de 30 años de experiencia, trajo el Jiu Jitsu brasileño a Costa Rica como el primer representante directo del linaje Gracie. Desde entonces, nuestra academia ha evolucionado para convertirse en un espacio inclusivo, que va más allá de ser solo un lugar para competir.</p>
          </div>
          <div className="border border-gray-700 p-6">
            <h2 className="text-xl md:text-2xl font-impact font-bold text-red-600 mb-2 uppercase">CREANDO CAMPEONES EN LA VIDA</h2>
            <p>Nuestro enfoque va más allá de enseñar solo técnicas de combate. En nuestra academia promovemos valores como el respeto, la humildad, la disciplina, la constancia y la autorrealización. Cada clase es una oportunidad para crecer como persona, no solo como atleta.</p>
          </div>
          <div className="border border-gray-700 p-6">
            <h2 className="text-xl md:text-2xl font-impact font-bold text-red-600 mb-2 uppercase">DEFENSA PERSONAL PARA TODAS LAS EDADES</h2>
            <p>Creemos que todos deben sentirse seguros y empoderados. Nuestras clases te enseñan a defenderte de forma efectiva, mientras fortaleces cuerpo y mente. No importa tu edad ni tu experiencia: aquí encontrarás el apoyo para crecer desde el primer día.</p>
          </div>
          <div className="border border-gray-700 p-6">
            <h2 className="text-xl md:text-2xl font-impact font-bold text-red-600 mb-2 uppercase">BIENESTAR MÁS ALLÁ DEL TATAMI</h2>
            <p>Entrenar en Mauro Sergio BJJ no solo mejora tu condición física. Mejora tu confianza, enfoque y bienestar emocional. Muchos de nuestros alumnos han superado miedos, ansiedad y estrés gracias a la práctica constante de Jiu Jitsu en un ambiente positivo y motivador.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros; 