'use client';

import React from "react";
import { useContactModal } from '../context/ContactModalContext';
import useTranslation from '../hooks/useTranslation';

const SobreNosotros = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D]">{t('sobreNosotros.sectionTitle')}</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/20 border-t border-l-0 border-b border-r-0 py-14">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('sobreNosotros.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            {t('sobreNosotros.description')}
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-black font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            {t('sobreNosotros.buttonText')}
          </button>
        </div>

        <div className="grid grid-cols-2">
          <div className="border-l-0 md:border-l border-r border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('sobreNosotros.cards.experiencia.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">{t('sobreNosotros.cards.experiencia.description')}</p>
          </div>

          <div className="border-b border-t border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('sobreNosotros.cards.campeones.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">{t('sobreNosotros.cards.campeones.description')}</p>
          </div>

          <div className="border-l-0 md:border-l border-r border-b border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('sobreNosotros.cards.defensaPersonal.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">{t('sobreNosotros.cards.defensaPersonal.description')}</p>
          </div>

          <div className="border-b border-[#7D7D7D]/20 p-3 md:p-6">
            <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('sobreNosotros.cards.bienestar.title') }}></h2>
            <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none">{t('sobreNosotros.cards.bienestar.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros; 