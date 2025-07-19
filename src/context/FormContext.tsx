"use client";
import React, { createContext, useState } from "react";

interface FormData {
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

const defaultFormData: FormData = {
    car: {
        marca: '',
        modelo: '',
        year: '',
        kilometraje: '',
        precio: '',
        combustible: '',
        transmision: '',
        color: '',
        estado: '',
    },
    user: {
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        address: ""
    },
    extras: {
        motivoDeVenta: "",
        comentarios: "",
        aceptaTerminos: false,
        papeleo: []
    },
};

export const FormContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
  formData: defaultFormData,
  setFormData: () => {},
});

export const FormProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [formData, setFormData] = useState(defaultFormData);

    console.log(formData);

    return (
        <FormContext.Provider value={{ formData, setFormData}}>
            {children}
        </FormContext.Provider>
    )
}