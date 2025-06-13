import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#F80000] text-black font-sofia pt-10 pb-4 px-4 relative space-y-12" style={{ overflow: 'hidden' }}>
            <div className="mx-auto flex flex-col md:flex-row sm:justify-between w-full px-4 gap-10">
                {/* Columna izquierda: Info Mauro Sergio BJJ */}
                <div className="flex-1 max-w-[270px] text-center md:text-left">
                    <div className="text-black font-medium text-2xl font-impact flex flex-row items-center justify-center md:justify-start">
                        <img src="/assets/LogoNavbar.svg" alt="Logo" className="w-10 h-10 mr-2" />
                        MAURO SERGIO BJJ
                    </div>
                    <p className="text-lg mb-1 font-sofia leading-tight">Formando personas fuertes dentro y fuera del tatami.
                    Ubicados en Mall Terrazas de Lindora, Sótano 2.
                    </p>
                </div>

                {/* Columna central: Links y redes */}
                <div className="flex-1 flex flex-col md:flex-row gap-12 justify-center md:justify-end items-center md:items-start text-sm">
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">LINKS</h4>
                        <ul className="space-y-4 text-xl font-sofia">
                            <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:underline">Instructor</a></li>
                            <li><a href="#" className="hover:underline">Instalaciones</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">REDES SOCIALES</h4>
                        <ul className="space-y-4 text-xl font-sofia">
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                        </ul>
                    </div>
                    {/* Columna derecha: Contacto */}
                    <div className="text-center md:text-left">
                        <h4 className="font-medium mb-2 font-impact text-2xl">CONTACTO</h4>
                        <p className="font-sofia text-xl font-bold">Correo:</p>
                        <p className="mb-2 break-all font-sofia text-lg">maurodeoliveirajj@hotmail.com</p>
                        <p className="font-sofia text-xl font-bold">WhatsApp:</p>
                        <p className="mb-2 break-all font-sofia text-lg">8850-4416</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-end">
                <div className="w-full">
                    <div className="md:text-center">
                        <div className="flex flex-row justify-between md:mx-4 font-sofia">
                            <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                                MAUR0 SERGIO
                            </p>
                            <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-right">
                                ACADEMIA DE
                            </p>
                        </div>
                        <h1 className="text-black text-6xl mb-3 md:mb-1 sm:text-[11.5vw] 2xl:text-[11.8vw] font-black leading-none transform scale-y-110 tracking-wide font-impact">
                            BRAZILIAN JIU JITSU
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
                        Design and Development by:
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