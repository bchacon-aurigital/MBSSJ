'use client';

import React from "react";
import { useContactModal } from '../context/ContactModalContext';
import useTranslation from '../hooks/useTranslation';
import Image from "next/image";

const ClasesHorarios = () => {
  const { t } = useTranslation();
  return (
    <section id="clasesHorarios" className="bg-black text-white w-full py-10 px-4 md:px-16 relative">
      <div className="absolute inset-0 flex items-start justify-start -translate-x-[20%] opacity-5 z-[1]">
        <Image
          src="/assets/LogoNavbar.svg"
          alt="Mauro Sergio BJJ Logo"
          width={1000}
          height={1000}
          className="invert"
          priority
          data-aos="fade-right"
          data-aos-delay="300"
        />
      </div>
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D]" data-aos="fade-right">{t('clasesHorarios.sectionTitle')}</div>
      <div className="grid grid-cols-1 xl:grid-cols-2 z-">
        <div className="md:col-span-1 flex flex-col justify-center border-[#F80000]/20 border-t border-l-0 border-b border-r-0 py-14">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            {t('clasesHorarios.description')}
          </p>
          <div className="z-50" data-aos="fade-up" data-aos-delay="100">
          <a href="https://wa.me/50688504416" className="bg-[#F80000] hover:bg-white hover:text-black duration-500 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            {t('clasesHorarios.buttonText')}
          </a>
          </div>
        </div>

        <div className="lg:border lg:border-[#F80000]/20">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border-b border-[#F80000]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.bjj.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.bjj.horarios') }}>
              </p>
            </div>

            <div className="border-b border-[#F80000]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.submission.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.submission.horarios') }}>
              </p>
            </div>

            <div className="border-b border-[#F80000]/20 lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.openMat.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.openMat.horarios') }}>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-t border-[#F80000]/20">
            <div className="border-b border-[#F80000]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.kids.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.kids.horarios') }}>
              </p>
            </div>

            <div className="p-3 md:p-6 lg:border-b-0 border-b border-[#F80000]/20 flex flex-col lg:justify-end">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-white mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.fundamentals.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.fundamentals.horarios') }}>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClasesHorarios;