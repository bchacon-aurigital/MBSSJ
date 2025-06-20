"use client";

import { useState, useEffect, useRef } from "react";
import { useContactModal } from '../context/ContactModalContext';
import useTranslation from '../hooks/useTranslation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
      setTimeout(() => setAnimateMenu(true), 10);
    } else if (!menuOpen && showMenu) {
      setAnimateMenu(false);
      const timeout = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setAnimateMenu(false);
    }
  }, []);

  return (
    <nav className="w-full px-3 lg:px-6 py-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <div className="text-black font-medium text-2xl font-impact flex flex-row items-center justify-center">
          <img src="/assets/LogoNavbar.svg" alt="Logo" className="w-10 h-10 mr-2" />
          <p className="hidden lg:block">{t('navbar.logo')}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-8 font-sofia text-xl uppercase">
        <a href="#instalaciones" className="text-black font-semibold hover:text-white duration-500 transition-colors">
          {t('navbar.links.informacion')}
        </a>
        <a href="#clasesHorarios" className="text-black font-semibold hover:text-white duration-500 transition-colors">
          {t('navbar.links.horarios')}
        </a>
        <a href="#tiendaProductos" className="text-black font-semibold hover:text-white duration-500 transition-colors">
          {t('navbar.links.tienda')}
        </a>
        <a href="#sobreNosotros" className="text-black font-semibold hover:text-white duration-500 transition-colors">
          {t('navbar.links.sobreNosotros')}
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t('navbar.buttons.openMenu')}
        >
          <svg className="w-9 h-9 text-[#F80000] bg-black p-2 rounded-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:block">
        <a href="https://wa.me/50688504416" className="bg-black text-white px-6 py-2 font-medium hover:bg-white hover:text-black duration-500 font-impact uppercase">
          {t('navbar.buttons.agendarSesion')}
        </a>
      </div>

      {showMenu && (
        <div
          className={`fixed inset-0 z-40 flex justify-end lg:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${menuOpen ? 'bg-opacity-60 opacity-100' : 'bg-opacity-0 opacity-0'}`}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`w-64 h-full bg-black p-6 flex flex-col space-y-6 font-sofia text-xl uppercase shadow-lg relative transform transition-transform duration-300 ${animateMenu ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label={t('navbar.buttons.closeMenu')}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#instalaciones" className="text-white font-semibold hover:text-gray-800 transition-colors" onClick={() => setMenuOpen(false)}>
              {t('navbar.links.informacion')}
            </a>
            <a href="#clasesHorarios" className="text-white font-semibold hover:text-gray-800 transition-colors" onClick={() => setMenuOpen(false)}>
              {t('navbar.links.horarios')}
            </a>
            <a href="#tiendaProductos" className="text-white font-semibold hover:text-gray-800 transition-colors" onClick={() => setMenuOpen(false)}>
              {t('navbar.links.tienda')}
            </a>
            <a href="#sobreNosotros" className="text-white font-semibold hover:text-gray-800 transition-colors" onClick={() => setMenuOpen(false)}>
              {t('navbar.links.sobreNosotros')}
            </a>
            <a href="https://wa.me/50688504416" className="bg-[#F80000] text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors font-impact uppercase mt-4" onClick={() => setMenuOpen(false)}>
              {t('navbar.buttons.agendarSesion')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;