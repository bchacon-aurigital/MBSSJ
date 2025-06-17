'use client';

import React from "react";
import useTranslation from '../hooks/useTranslation';

const Instructor = () => {
  const { t } = useTranslation();
  return (
    <section id="instructor" className="bg-white text-black w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555]" data-aos="fade-right">{t('instructor.sectionTitle')}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img src="/assets/Instructor.avif" alt={t('instructor.altImage')} className="w-full h-full object-cover" />

        <div className="flex flex-col justify-end border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 pt-14">
          <div className="mb-6 lg:mb-8 lg:px-12">
            <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('instructor.title') }}>
            </h1>
            <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
              {t('instructor.description')}
            </p>
          </div>

          <div className="grid grid-cols-3 text-center border-[#7D7D7D]/50 border-t">
            <div className="border-r border-[#7D7D7D]/50 lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[7rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none" data-aos="fade-down" data-aos-delay="100">{t('instructor.stats.paulista.number')}</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('instructor.stats.paulista.description') }}></p>
            </div>
            <div className="border-r border-[#7D7D7D]/50 lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[7rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none" data-aos="fade-down" data-aos-delay="200">{t('instructor.stats.mma.number')}</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('instructor.stats.mma.description') }}></p>
            </div>
            <div className="lg:py-10 lg:px-12 py-6 px-3">
              <span className="text-[7rem] md:text-[10rem] font-impact font-bold text-[#F80000] leading-none" data-aos="fade-down" data-aos-delay="300">{t('instructor.stats.mundial.number')}</span>
              <p className="mt-2 text-[#7D7D7D] font-sofia font-semibold text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('instructor.stats.mundial.description') }}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor; 