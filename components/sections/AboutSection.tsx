"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { AboutText } from "./about/AboutText";

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC]">
      {/* Background Image */}
      <div className="absolute inset-0 max-w-[1800px] mx-auto">
        <Image
          src="/Images/Varios/Nosotros_Seccion.png"
          alt="Nosotros Background"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1800px) 100vw, 1800px"
          quality={100}
        />
      </div>

      <div className="relative z-10 section-container section-padding flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent text-center">
            {language === "es" ? "Nosotros" : "About Us"}
          </h2>
          
          <AboutText />
        </motion.div>
      </div>
    </section>
  );
}