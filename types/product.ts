export interface Product {
  icon: React.ReactNode | null;
  title: string;
  description: string;
  image: string;
  category: string;
  isMultiservice: boolean;
  isVarios: boolean;
  videoUrl?: string;
  demoUrl?: string;
}