"use client";

import { X } from "lucide-react";
import { Product } from "@/types/product";

interface ProductHeaderProps {
  product: Product;
  onClose: () => void;
}

export function ProductHeader({ product, onClose }: ProductHeaderProps) {
  return (
    <div className="relative p-8 border-b border-gray-800">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="h-5 w-5 text-white" />
      </button>
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-white">
          {product.title}
        </h2>
      </div>
    </div>
  );
}