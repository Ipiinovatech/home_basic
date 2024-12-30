"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Product } from "@/types/product";
import { ProductHeader } from "./ProductHeader";
import { ProductContent } from "./ProductContent";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const { language } = useLanguage();
  const [showImage, setShowImage] = useState(false);

  const handleContactClick = () => {
    onClose();
    const event = new CustomEvent("openChatbot");
    window.dispatchEvent(event);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[1400px] max-h-[95vh] bg-gradient-to-b from-gray-900 to-black border-gray-800 p-0" closeButton={false}>
        <ProductHeader 
          product={product} 
          onClose={onClose} 
        />

        <ScrollArea className="max-h-[calc(95vh-200px)] overflow-auto">
          <ProductContent
            product={product}
            showImage={showImage}
            onToggleImage={() => setShowImage(!showImage)}
            onContact={handleContactClick}
            language={language}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}