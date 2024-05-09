export interface Benefits {
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
}

export type ProductSchemaType = {
    id?: string;
    additionalType: string;
    description: string;
    name: string;
}

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
    transmission:  'estandar' | 'automatica';
    extra: string[];
    seoDetails: SeoDetailsType;
}

