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
    actualLocation: string;
    color: string;
    doors: number;
    fuelType: string;
    idProduct: string;
    mileage: number;
    mortage: number;
    name: string;
    price: number;
    transmission: string;
    year: number;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    image: any;
}

export interface ProductsProps {
    id: number;
    attributes: ProductAtributes;
}