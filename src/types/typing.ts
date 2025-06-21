export interface BenefitsTypes {
  id: string;
  title: string;
  description: string;
  icon: any;
  alt: string;
}
export type SeoDetailsType = {
  title: string;
  description: string;
  keywords: string[];
  subject: string;
  productSchema?: ProductSchemaType;
};

export type ProductSchemaType = {
  id?: string;
  additionalType: string;
  description: string;
  name: string;
  color: string;
  image: string[];
  brand: string;
  price: number;
};

export type HighlightsType = {
    bodyStyle?: string;
    engine?: string;
    mpgCityHwy?: string;
    fuel?: "gasolina" | "disel" | "electrico";
    // Tipo de traccion
    driveType?: string;
    interiorColor?: string;
    transmission?: "estandar" | "automatica";
    exteriorColor?: string;
  };

export interface carType {
  id: string;
  name: string;
  brand: string;
  year: number;
  color: string;
  description: string;
  doors: number;
  images: string[];
  mileage: number;
  price: number;
  mortage: number;
  type: string;
  transmission: "estandar" | "automatica";
  extra: string[];
  highlights?: HighlightsType;
  lastAdded?: string;
  seoDetails: SeoDetailsType;
}

// Define el tipo de datos para el contexto
export interface FilterContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedMileage: [number, number];
  setSelectedMileage: (mileage: [number, number]) => void;
  filterProducts: any[];
  setFilterProducts: (products: any[]) => void;
  selectedYears: number[];
  setSelectedYears: (years: number[]) => void;
}
