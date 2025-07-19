"use client";
import { FormData } from "@/types/formularios";
import React, { createContext, useState } from "react";


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
  setTermsAndConditions: (value: boolean) => void;
}>({
  formData: defaultFormData,
  setFormData: () => {},
  setTermsAndConditions: () => {},
});

export const FormProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [formData, setFormData] = useState(defaultFormData);

    const setTermsAndConditions = (value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      extras: {
        ...prev.extras,
        aceptaTerminos: value,
      },
    }));
  };

    return (
        <FormContext.Provider value={{ formData, setFormData, setTermsAndConditions}}>
            {children}
        </FormContext.Provider>
    )
}