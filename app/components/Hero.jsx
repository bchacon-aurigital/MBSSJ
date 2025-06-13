'use client';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className="h-screen flex flex-col bg-[#F80000]">
            <div className="h-1/2 w-full flex flex-col">
                <Navbar />
                <div className="flex-1 flex justify-end items-end px-2">
                    <div className="w-full">
                        <div className="text-center">
                            <div className="flex flex-row justify-between mx-3 font-sofia">
                                <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                                MAUR0 SERGIO
                                </p>
                                <p className="text-black text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-right ">
                                    ACADEMIA DE
                                </p>
                            </div>
                            <h1 className="text-black text-[11.1vw] sm:text-[11.5vw] 2xl:text-[11.9vw] font-black leading-none transform scale-y-110 tracking-wide font-impact">
                                BRAZILIAN JIU JITSU
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-1/2 w-full relative">
                <img
                    src="/assets/HERO.avif"
                    alt="Brazilian Jiu Jitsu fighter"
                    className="object-cover grayscale w-full h-full"
                />
            </div>
        </div>
    );
};

export default Hero;