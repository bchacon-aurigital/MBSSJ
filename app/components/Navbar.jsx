"use client";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-black font-medium text-2xl font-impact flex flex-row items-center justify-center">
          <img src="/assets/LogoNavbar.svg" alt="Logo" className="w-10 h-10 mr-2" />
          MAURO SERGIO BJJ
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-sofia text-xl uppercase">
        <a href="#" className="text-black font-semibold hover:text-gray-800 transition-colors">
          Información
        </a>
        <a href="#" className="text-black font-semibold hover:text-gray-800 transition-colors">
          Testimonios
        </a>
        <a href="#" className="text-black font-semibold hover:text-gray-800 transition-colors">
          Contacto
        </a>
        <a href="#" className="text-black font-semibold hover:text-gray-800 transition-colors">
          Sobre nosotros
        </a>
      </div>

      <div>
        <button className="bg-black text-[#F80000] px-6 py-2 font-medium hover:bg-gray-800 transition-colors font-impact uppercase">
          Agendar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;