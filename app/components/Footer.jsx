'use client';

import React from 'react';
import useTranslation from '../hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-[#F80000] text-black font-sofia pt-10 pb-4 px-4 relative space-y-12" style={{ overflow: 'hidden' }}>
            <div className="mx-auto flex flex-col md:flex-row sm:justify-between w-full px-4 gap-10">
                {/* Columna izquierda: Info Mauro Sergio BJJ */}
                <div className="flex-1 max-w-[270px] text-center md:text-left">
                    <div className="text-black font-medium text-2xl font-impact flex flex-row items-center justify-center md:justify-start">
                        <img src="/assets/LogoNavbar.svg" alt="Logo" className="w-10 h-10 mr-2" />
                        {t('navbar.logo')}
                    </div>
                    <p className="text-lg mb-1 font-sofia leading-tight">{t('footer.description')}
                    </p>
                </div>

                {/* Columna central: Links y redes */}
                <div className="flex-1 flex flex-col md:flex-row gap-12 justify-center md:justify-end items-center md:items-start text-sm">
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">{t('footer.links.title')}</h4>
                        <ul className="space-y-4 text-xl font-sofia">
                            <li><a href="#sobreNosotros" className="hover:text-white duration-300 transition-color">{t('footer.links.sobreNosotros')}</a></li>
                            <li><a href="#instructor" className="hover:text-white duration-300 transition-color">{t('footer.links.instructor')}</a></li>
                            <li><a href="#instalaciones" className="hover:text-white duration-300 transition-color">{t('footer.links.instalaciones')}</a></li>
                            <li><a href="#clasesHorarios" className="hover:text-white duration-300 transition-color">{t('navbar.links.horarios')}</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">{t('footer.redesSociales.title')}</h4>
                        <ul className="space-y-4 text-xl font-sofia">
                            <li><a href="https://www.instagram.com/msbjj_academy/?hl=es" className="hover:text-white duration-300 transition-color">{t('footer.redesSociales.instagram')}</a></li>
                            <li><a href="https://www.facebook.com/MauroSergioBJJ/" className="hover:text-white duration-300 transition-color">{t('footer.redesSociales.facebook')}</a></li>
                        </ul>
                    </div>
                    {/* Columna derecha: Contacto */}
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">{t('footer.contacto.title')}</h4>
                        <p className="font-sofia text-xl font-bold">{t('footer.contacto.correo')}</p>
                        <p className="mb-2 break-all font-sofia text-lg"><a href="mailto:info@maurosergio.com" className="hover:text-white duration-300 transition-color">{t('footer.contacto.email')}</a></p>
                        <p className="font-sofia text-xl font-bold">{t('footer.contacto.whatsapp')}</p>
                        <p className="mb-2 break-all font-sofia text-lg"><a href="https://wa.me/50688504416" className="hover:text-white duration-300 transition-color">{t('footer.contacto.telefono')}</a></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-end">
                <div className="w-full">
                    <div className="md:text-center">
                        <div className="flex flex-row justify-between md:mx-4 font-sofia">
                            <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                                {t('footer.heroFooter.name')}
                            </p>
                            <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-right">
                                {t('footer.heroFooter.academy')}
                            </p>
                        </div>
                        <h1 className="text-black text-6xl mb-3 md:mb-1 sm:text-[11.5vw] 2xl:text-[11.8vw] font-black leading-none transform scale-y-110 tracking-wide font-impact">
                            {t('footer.heroFooter.title')}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full h-5 bg-[#000000] flex justify-end items-end absolute left-0 bottom-0">
                <a
                    href="https://aurigital.com"
                    target="_blank"
                    className="flex justify-center items-center mx-auto w-full mt-1"
                    aria-label="Créditos de diseño y desarrollo por Aurigital"
                >
                    <p className="text-white uppercase text-[10px] text-center p-1 hover:text-[#28C0F5]">
                        {t('footer.credits')}
                    </p>
                    <img
                        src="./assets/isotipo.avif"
                        alt="Aurigital logo"
                        className="h-[18px] w-[18px] ml-1"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer; 