"use client";

import { motion } from "framer-motion";
import { ImageIcon, ImageOff, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "./VideoPlayer";
import { DemoButton } from "./DemoButton";
import { Product } from "@/types/product";
import ReactMarkdown from "react-markdown";

interface ProductContentProps {
  product: Product;
  showImage: boolean;
  onToggleImage: () => void;
  onContact: () => void;
  language: string;
}

export function ProductContent({ 
  product, 
  showImage, 
  onToggleImage, 
  onContact,
  language 
}: ProductContentProps) {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleImage}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          {showImage ? (
            <>
              <ImageOff className="h-4 w-4 mr-2" />
              {language === "es" ? "Ocultar imagen" : "Hide image"}
            </>
          ) : (
            <>
              <ImageIcon className="h-4 w-4 mr-2" />
              {language === "es" ? "Mostrar imagen" : "Show image"}
            </>
          )}
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showImage ? 1 : 0, height: showImage ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full overflow-hidden rounded-xl"
      >
        {showImage && (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-xl"
          />
        )}
      </motion.div>

      {product.videoUrl && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            {language === "es" ? "Video Explicativo" : "Explanatory Video"}
          </h3>
          <VideoPlayer url={product.videoUrl} title={product.title} />
        </div>
      )}

      <div className="space-y-8 max-w-[80ch] mx-auto">
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold text-[var(--accent-blue)] mt-8 mb-4">{children}</h3>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 text-gray-300">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed text-lg mb-6">{children}</p>
              ),
            }}
          >
            {product.description}
          </ReactMarkdown>
        </div>

        <div className="flex flex-wrap gap-4">
          {product.demoUrl && (
            <DemoButton demoUrl={product.demoUrl} />
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white text-lg font-medium hover:opacity-90 transition-opacity"
          >
            {language === "es" ? "Contactar" : "Contact Us"}
            <ExternalLink className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}