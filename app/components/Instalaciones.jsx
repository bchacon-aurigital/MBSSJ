'use client';

import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdShower } from "react-icons/md";
import useTranslation from '../hooks/useTranslation';

const SobreNosotros = () => {
  const { t } = useTranslation();
  return (
    <section id="instalaciones" className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D] uppercase" data-aos="fade-right">{t('instalaciones.sectionTitle')}</div>
      <div className="grid grid-cols-1">
      <img src="/assets/Instalaciones.avif" alt={t('instalaciones.altImage')} className="w-full max-h-[500px] object-cover border-[#F80000]/50 border-t py-5" />

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:min-h-[550px]">
          <div className="lg:border-r border-b border-t border-[#F80000]/20 p-3 md:p-6">
           <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center" data-aos="fade-up" data-aos-delay="100"><IoShieldCheckmark /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase mt-6 md:mt-12" dangerouslySetInnerHTML={{ __html: t('instalaciones.cards.comodidad.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">{t('instalaciones.cards.comodidad.description')}</p>
          </div>

          <div className="lg:border-r border-b border-t border-[#F80000]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center" data-aos="fade-up" data-aos-delay="200"><FaBookBookmark /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase mt-6 md:mt-12" dangerouslySetInnerHTML={{ __html: t('instalaciones.cards.tatami.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">{t('instalaciones.cards.tatami.description')}</p>
          </div>

          <div className="lg:border-r border-b border-t border-[#F80000]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center" data-aos="fade-up" data-aos-delay="300"><FaClock /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase mt-6 md:mt-12" dangerouslySetInnerHTML={{ __html: t('instalaciones.cards.areaEspera.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">{t('instalaciones.cards.areaEspera.description')}</p>
          </div>

          <div className="border-b border-t border-[#F80000]/20 p-3 md:p-6">
          <div className="p-4 text-3xl rounded-md bg-[#F80000] text-black w-16 flex justify-center items-center" data-aos="fade-up" data-aos-delay="400"><MdShower /></div>
            <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase mt-6 md:mt-12" dangerouslySetInnerHTML={{ __html: t('instalaciones.cards.duchas.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-lg leading-none">{t('instalaciones.cards.duchas.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros; 