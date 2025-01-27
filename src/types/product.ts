export interface Product {
    id: number;
    category: string;
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    images: string[];
    features: string[];
    certifications: string[];
    nutritionalInfo: {
      [key: string]: string;
    };
    ingredients: string[];
    sizes: Array<{
      size: string;
      price: string;
    }>;
  }