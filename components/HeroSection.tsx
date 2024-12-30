'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Database, Lock } from 'lucide-react';
import { Link } from 'react-scroll';
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

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: language === 'es' ? 'IA Avanzada' : 'Advanced AI',
      description:
        language === 'es'
          ? 'Tecnología de punta para potenciar tu negocio'
          : 'Cutting-edge technology to power your business',
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: language === 'es' ? 'Gestión de Datos' : 'Data Management',
      description:
        language === 'es'
          ? 'Organización inteligente de información'
          : 'Intelligent information organization',
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: language === 'es' ? 'Seguridad Total' : 'Total Security',
      description:
        language === 'es'
          ? 'Protección avanzada de datos'
          : 'Advanced data protection',
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: language === 'es' ? 'Automatización' : 'Automation',
      description:
        language === 'es'
          ? 'Procesos optimizados e inteligentes'
          : 'Optimized and intelligent processes',
    },
  ];

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="text-white">
                  {language === 'es' ? 'IPINNOVATECH' : 'IPINNOVATECH'}
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {language === 'es'
                    ? 'Con su Red Multiservicios de IA'
                    : 'With its AI Multiservice Network'}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/80 bg-black/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl mb-6 sm:mb-8 border border-white/10">
                {language === 'es'
                  ? 'De la idea a la innovacion tecnologica'
                  : 'from idea to technological innovation'}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
