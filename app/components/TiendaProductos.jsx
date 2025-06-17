'use client';

import React from "react";
import useTranslation from '../hooks/useTranslation';

const TiendaProductos = () => {
  const { t } = useTranslation();
  return (
    <section id="tiendaProductos" className="bg-white text-black w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#555555]">{t('tiendaProductos.sectionTitle')}</div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#7D7D7D]/50 border-t border-l-0 border-b border-r-0 py-14 order-last md:order-first">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('tiendaProductos.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
          {t('tiendaProductos.description')}
          </p>
          <button className="bg-[#F80000] hover:bg-red-700 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
            {t('tiendaProductos.buttonText')}
          </button>
        </div>

        <img src="/assets/TiendaProductos.avif" alt={t('tiendaProductos.altImage')} className="w-full h-full object-cover order-first md:order-last" />
      </div>
    </section>
  );
};

export default TiendaProductos; 