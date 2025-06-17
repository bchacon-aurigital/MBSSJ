'use client';

import React from "react";
import { useContactModal } from '../context/ContactModalContext';
import useTranslation from '../hooks/useTranslation';

const ClasesHorarios = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D]">{t('clasesHorarios.sectionTitle')}</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/20 border-t border-l-0 border-b border-r-0 py-14">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            {t('clasesHorarios.description')}
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            {t('clasesHorarios.buttonText')}
          </button>
        </div>

        <div className="lg:border lg:border-[#7D7D7D]/20">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.bjj.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.bjj.horarios') }}>
              </p>
            </div>

            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.submission.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.submission.horarios') }}>
              </p>
            </div>

            <div className="border-b border-[#7D7D7D]/20 lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.openMat.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.openMat.horarios') }}>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-t border-[#7D7D7D]/20">
            <div className="border-b border-[#7D7D7D]/20 lg:border-r lg:border-b-0 p-3 md:p-6">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.kids.title') }}>
              </h2>
              <p className="text-[#ffffff]/70 font-sofia font-medium text-sm md:text-xl leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.kids.horarios') }}>
              </p>
            </div>

            <div className="p-3 md:p-6 lg:border-b-0 border-b border-[#7D7D7D]/20 flex flex-col lg:justify-end">
              <h2 className="text-xl md:text-4xl font-impact font-bold text-[#F80000] mb-3 uppercase md:mt-20" dangerouslySetInnerHTML={{ __html: t('clasesHorarios.clases.fundamentals.title') }}>
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