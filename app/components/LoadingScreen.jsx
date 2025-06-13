"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
            <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full border-2 border-[#F80000] rounded-full animate-spin border-t-transparent"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/assets/LogoNavbar.svg"
                            alt="Mauro Sergio BJJ Logo"
                            width={80}
                            height={80}
                            className="invert"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}