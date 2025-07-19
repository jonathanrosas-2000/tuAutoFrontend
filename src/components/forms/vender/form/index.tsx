"use client";
import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link';
import { FormCar, FormContacto, FormExtra } from '@/components'
import { FormContext } from '@/context/FormContext';
import styles from "../styles.module.css";

function Index() {
    const [confirmation, setConfirmation] = useState(false);

    const { formData, setTermsAndConditions, setClearForm } = useContext(FormContext);

    useEffect(() => {
        if (confirmation) {
            const timer = setTimeout(() => {
                setConfirmation(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [confirmation]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/vender-mi-coche', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setConfirmation(true);
            setClearForm();
        }
    };

    const isFormValid = (): boolean => {
        const { car, user, extras } = formData;

        const carFieldsFilled = Object.values(car).every(Boolean);
        const userFieldsFilled = Object.values(user).every(Boolean);
        const extrasFieldsFilled =
            extras.motivoDeVenta.trim() !== '' &&
            extras.aceptaTerminos === true;

        return carFieldsFilled && userFieldsFilled && extrasFieldsFilled;
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormCar />
            <FormContacto />
            <FormExtra />


            <div className={styles.termsAndConditions}>
                <input
                    type="checkbox"
                    name="terminos"
                    checked={formData.extras.aceptaTerminos}
                    onChange={() => setTermsAndConditions(!formData.extras.aceptaTerminos)}
                    style={{ marginRight: "5px" }}
                />
                Acepto los <Link href={"/legales/terminos-y-condiciones"} className={styles.specialText}>términos y condiciones</Link> y autorizo el tratamiento de mis datos personales conforme a la <Link href="/legales/politica-privacidad" className={styles.specialText}>politica de privacidad</Link>. Entiendo que tuAutoSeminuevo evaluará mi vehículo y me contactará con una oferta
            </div>

            <div className={styles.mainContainer}>
                <button disabled={!isFormValid()} type="submit" className={styles.button}>Solicitar Evaluación Gratuita</button>

                {confirmation && (
                    <div className={styles.greenDiv}><p>Gracias por la información, nos contactaremos pronto.</p></div>
                )}
            </div>

        </form>
    )
}

export default Index;
