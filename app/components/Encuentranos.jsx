'use client';

import React from "react";
import { useContactModal } from '../context/ContactModalContext';
import useTranslation from '../hooks/useTranslation';

const Encuentranos = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-black text-white w-full py-10 px-4 md:px-16">
      <div className="mb-4 text-lg font-sofia font-medium text-[#8D8D8D] uppercase" data-aos="fade-right">
        {t('encuentranos.sectionTitle')}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="md:col-span-1 flex flex-col justify-center border-[#F80000]/50 border-t border-l-0 border-b border-r-0 py-14 order-last xl:pl-6">
          <h1 className="text-3xl md:text-6xl font-impact font-bold text-[#F80000] mb-4" dangerouslySetInnerHTML={{ __html: t('encuentranos.title') }}>
          </h1>
          <p className="mb-6 text-base md:text-xl text-[#7D7D7D] max-w-xl font-sofia font-semibold">
            {t('encuentranos.description')}
          </p>
          <div className="z-50" data-aos="fade-up" data-aos-delay="100">
            <a href="https://www.google.com/maps/dir/?api=1&destination=9.957320531608%2C-84.196410943883" className="bg-[#F80000] uppercase hover:bg-white hover:text-black duration-500 text-white font-medium font-impact py-3 px-12 rounded transition-all w-fit text-md">
              {t('encuentranos.buttonText')}
            </a>
          </div>
        </div>

        <video 
          src="/assets/ubicacion.webm" 
          className="w-full h-full object-cover order-last"
          
          controls
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default Encuentranos; 