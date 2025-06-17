'use client';

import useTranslation from '../hooks/useTranslation';
import { useState } from 'react';

export default function LanguageSelector() {
  const { language, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#F80000] border-[#7D7D7D]/30 hover:border-[#F80000] rounded-full p-2 hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-red-500/20"
        >
          <div className="flex items-center">
            <span className="text-2xl font-sofia font-semibold leading-none text-white">{currentLanguage?.flag}</span>
          </div>
        </button>

        {isOpen && (
          <div className="absolute bottom-full mb-3 bg-black border-2 border-[#7D7D7D]/30 rounded-lg shadow-2xl min-w-[160px] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left border-b border-[#7D7D7D]/20 last:border-b-0 transition-all duration-200 ${
                  language === lang.code 
                    ? 'bg-[#F80000] text-white' 
                    : 'text-[#7D7D7D] hover:bg-[#F80000]/10 hover:text-white'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-sofia font-semibold text-sm uppercase tracking-wide">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 