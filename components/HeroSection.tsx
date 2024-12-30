'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videoMain.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex flex-col justify-center py-12">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto w-full"
            >
              {/* Contenedor Flex para Logo y Título */}
              <div className="flex items-center justify-center md:justify-start md:flex-row flex-col mb-6 sm:mb-8 w-full">
                {/* Logo visible solo en pantallas grandes */}
                <img
                  src="/Images/Varios/Logo_Transparente_png.png" // Ruta correcta del logo
                  alt="Logo"
                  className="hidden md:block h-auto w-48 sm:w-64 lg:w-80 max-w-xs" // Logo visible en pantallas grandes
                />
                {/* Contenido de texto visible solo en pantallas grandes */}
                <div className="hidden md:block ml-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                    {language === 'es' ? 'IPINNOVATECH' : 'IPINNOVATECH'}
                  </h1>
                  <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
                    {language === 'es'
                      ? 'Con su Red Multiservicios de IA'
                      : 'With its AI Multiservice Network'}
                  </span>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/80 mt-4 italic">
                    {/* Cambié la frase y la hice cursiva */}
                    {language === 'es'
                      ? 'De la idea a la transformación digital'
                      : 'From idea to digital transformation'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features Grid - Se oculta en pantallas móviles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20 hidden md:grid"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Mobile view adjustments */}
      <div className="md:hidden flex flex-col items-center justify-center w-full absolute inset-0 z-10">
        {/* Logo visible solo en pantallas móviles */}
        <img
          src="/Images/Varios/Logo_Transparente_png.png"
          alt="Logo"
          className="h-auto w-48 sm:w-64 lg:w-80 max-w-xs mb-4" // Tamaño más grande en móvil
        />
        {/* Texto visible solo en pantallas móviles y en cursiva */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/80 italic">
          {language === 'es'
            ? 'De la idea a la transformación digital'
            : 'From idea to digital transformation'}
        </p>
      </div>
    </section>
  );
}
