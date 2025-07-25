"use client";
import { BenefitsSection, BreadCrumb, FormContactoUsuario } from "@/components";
import PrincipalLayout from "@/layout/PrincipalLayout";
import styles from "./styles.module.css";
import "@/styles/globals.css";
import { FormContext, FormProvider } from "@/context/FormContext";
import { useContext } from "react";

const benefitsArray = [
    {
        title: "Envias tu Información",
        description: "Completa el formulario con los datos de tu auto"
    },
    { title: "Te Contactamos", description: "Nuestro equipo se comuica contigo en un plazo menor a 48 horas" },
    { title: "Evaluamos tu Auto", description: "Agendamos una cita y realizamos una revisón física" },
    { title: "Recibe una oferta", description: "Recibe una oferta por nuestra parte" }
]

function Index() {
    const { formData, setFormData } = useContext(FormContext);

    return (
        <FormProvider>
            <PrincipalLayout>
                <div className={styles.breadcrumbContainer}>
                    <BreadCrumb steps={[{ title: "Tienda", link: "/tienda" }, { title: "Vender mi automovil", link: "/vende-tu-auto" }]} />
                </div>
                <div className={styles.mainContainer}>
                    <h2 className={styles.title}>¡Compramos <span className={styles.colored}>tu Auto Seminuevo!</span></h2>
                    <p className={styles.paragraph}>Obtén la mejor cotización para tu vehículo de forma rápida y segura.</p>
                </div>
                <div className={styles.mainContainer}>
                    <FormContactoUsuario />
                </div>
                <BenefitsSection title="¿Cómo funciona nuestro proceso?" benefits={benefitsArray} />
            </PrincipalLayout>
        </FormProvider>
    )
}

export default Index
