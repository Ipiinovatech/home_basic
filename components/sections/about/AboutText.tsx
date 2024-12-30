"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function AboutText() {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-justify">
      <p className="text-lg text-gray-700 leading-relaxed font-medium">
        IPINNOVATECH es una compañía de tecnología desde el 2007 estamos en el mercado Corporativo, con presencia nacional en Colombia, y en otros países como Perú, Ecuador y Estados Unidos.
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="ml-2 text-[var(--primary-blue)] hover:text-[var(--accent-blue)] transition-colors duration-300 font-semibold"
          >
            {language === "es" ? "Clic para leer más..." : "Click to read more..."}
          </button>
        )}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Enfocada en soluciones de TIC'S con IA, y nos caracterizamos por ser una empresa que crea servicios y productos INNOVADORES proyectos de ultima tecnología, creando soluciones innovadoras para nuestros clientes en todos los sectores Corporativos, Gobierno y próximamente en el mercado Masivo.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilizamos metodología
              <span className="inline-block w-40 h-10 relative mx-1 align-middle">
                <Image
                  src="/Images/Brochure/Logo_infinito.png"
                  alt="Metodología"
                  fill
                  className="object-contain"
                  priority
                  sizes="160px"
                />
              </span>
              que nos permite crear plataformas y servicios de manera ágil y con calidad, generando valor a nuestros clientes, y convirtiéndonos en su mejor aliado.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Ofrecemos productos y servicios en modalidades <span className="font-semibold text-[var(--primary-blue)]">SaaS</span> ("Software como un servicio"), <span className="font-semibold text-[var(--primary-blue)]">IaaS</span> ("Infraestructura como un servicio"), y <span className="font-semibold text-[var(--primary-blue)]">PaaS</span> ("Plataforma como un servicio").
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Toda nuestra infraestructura está soportada en uno de los <span className="font-semibold text-[var(--primary-blue)]">CLOUD COMPUTING</span> más grandes del mundo, <span className="font-semibold text-[var(--primary-blue)]">AWS</span> ("Amazon Web Services"), el cual nos permite crecer la infraestructura de los servicios fácilmente, garantizar la disponibilidad, y dar continuidad de los mismos y trabajamos con una de las mas grandes tecnologías de <span className="font-semibold text-[var(--primary-blue)]">IA (LLM)</span> como <span className="font-semibold text-[var(--primary-blue)]">Open IA</span>.
            </p>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)] transition-colors duration-300 font-semibold"
            >
              {language === "es" ? "Mostrar menos" : "Show less"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}