'use client';
import Image from 'next/image';
import Navbar from './Navbar';
import useTranslation from '../hooks/useTranslation';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className="h-screen flex flex-col bg-[#F80000]">
            <div className="h-1/2 w-full flex flex-col">
                <Navbar />
                <div className="flex-1 flex justify-end items-end px-2">
                    <div className="w-full">
                        <div className="sm:text-center">
                            <div className="flex flex-row justify-between sm:mx-3 font-sofia">
                                <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                                {t('hero.name')}
                                </p>
                                <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-right ">
                                    {t('hero.academy')}
                                </p>
                            </div>
                            <h1 className="text-black text-7xl mb-3 sm:mb-0 sm:text-[11.5vw] 2xl:text-[11.9vw] font-black leading-none transform scale-y-110 tracking-wide font-impact">
                                {t('hero.title')}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-1/2 w-full relative">
                <img
                    src="/assets/HERO.avif"
                    alt={t('hero.altImage')}
                    className="object-cover grayscale w-full h-full object-[30%_center]"
                />
            </div>
        </div>
    );
};

export default Hero;