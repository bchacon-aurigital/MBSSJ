import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex items-center gap-8 mb-8">
        <span className="text-white text-[7rem] font-impact font-bold select-none">404</span>
        <Image
          src="/assets/LogoNavbar.svg"
          alt="Logo Mauro Sergio BJJ"
          width={100}
          height={100}
          className="invert"
          priority
        />
      </div>
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-3xl font-impact mb-4">Página no encontrada</h2>
        <p className="text-[#bbbbbb] text-lg mb-8 font-sofia">La página que buscas no existe o fue movida.<br />Puedes regresar al inicio haciendo clic abajo.</p>
        <Link href="/">
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-impact py-3 px-10 rounded transition-all text-lg">
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
} 