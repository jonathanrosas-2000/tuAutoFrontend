export interface FormData {
    car: {
        marca: string;
        modelo: string;
        year: string;
        kilometraje: string;
        precio: string;
        combustible: string;
        transmision: string;
        color: string;
        estado: string;
    };
    user: {
        nombre: string;
        apellidos: string;
        telefono: string;
        email: string;
        address: string;
    };
    extras: {
        motivoDeVenta: string;
        comentarios: string;
        aceptaTerminos: boolean;
        papeleo: string[];
    };
}