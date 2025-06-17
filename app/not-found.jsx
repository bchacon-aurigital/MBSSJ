'use client';

import Image from "next/image";
import Link from "next/link";
import useTranslation from './hooks/useTranslation';

export default function NotFound() {
  const { t } = useTranslation();
  
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
        <h2 className="text-white text-2xl md:text-3xl font-impact mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-[#bbbbbb] text-lg mb-8 font-sofia" dangerouslySetInnerHTML={{ __html: t('notFound.description') }}>
        </p>
        <Link href="/">
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-impact py-3 px-10 rounded transition-all text-lg">
            {t('notFound.buttonText')}
          </button>
        </Link>
      </div>
    </div>
  );
} 