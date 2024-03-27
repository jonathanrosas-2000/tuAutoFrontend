export interface BenefitsProps {
    title: string; 
    content: string;
    icon: any; 
    alt: string;
}

export interface StepProps {
    title: string;
    link: string;
}

export interface ProductAtributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    color: string;
    nombre: string;
    descripcion: string;
    anio: number;
    kilometraje: number;
    precio: number;
    enganche: number;
    puertas: number;
    tipo: string;
    transmision: string;
    ubicacionActual: string;
    caracteristicas: null | string;
    image: any;
}

export interface ProductsProps {
    id: number;
    attributes: ProductAtributes;
}