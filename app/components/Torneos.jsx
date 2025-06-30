'use client';

import React from "react";
import useTranslation from '../hooks/useTranslation';

const Torneos = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#000000] text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555] uppercase" data-aos="fade-right">
        {t('torneos.sectionTitle')}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 py-14 order-last xl:pl-8">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('torneos.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            {t('torneos.description')}
          </p>
          <div data-aos="fade-up" data-aos-delay="100">
          <a href="https://wa.me/50688504416" className="bg-[#F80000] hover:bg-white transition-all duration-500 text-black font-medium font-impact py-3 px-12 rounded w-fit text-md">
            {t('torneos.buttonText')}
          </a>
          </div>
        </div>

        <img src="/assets/Torneos.avif" alt={t('torneos.altImage')} className="w-full h-full object-cover order-first " />
      </div>
    </section>
  );
};

export default Torneos; 