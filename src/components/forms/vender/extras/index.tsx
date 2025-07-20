import React, { useContext } from 'react'
import styles from "../styles.module.css";
import { FormContext } from '@/context/FormContext';
import Image from 'next/image';

//Icons 
import TableIcon from '@/assets/icons/forms/table.svg';

interface OptionsInterface {
    label: string;
    value: string;
}

const options: OptionsInterface[] = [
    { label: "Tarjeta de circulación", value: "tarjeta" },
    { label: "Factura", value: "factura" },
    { label: "Verificación", value: "verificacion" }
]

function Index() {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            extras: {
                ...prev.extras,
                [name]: value
            }
        }))
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setFormData((prev) => {
            const currentSelections = prev.extras.papeleo || [];

            const updatedSelections = checked
                ? [...currentSelections, value]
                : currentSelections.filter((item) => item !== value);

            return {
                ...prev,
                extras: {
                    ...prev.extras,
                    papeleo: updatedSelections
                }
            };
        });
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.topHeader}>
                    <h2 className={styles.header}><Image src={TableIcon} alt='Contacto' width={25} height={25} />Información Adicional</h2>
                    <p className={styles.paragraph}>Ayúdanos a conocer mejor tu situación.</p>
                </div>
                <div className={styles.form}>
                    <div className={styles.oneColumn}>
                        <div className={styles.field}>
                            <label className={styles.label}>¿Por qué quieres vender tu auto?</label>
                            <input className={styles.inputField} type='text' placeholder='Cuentanos un poco más' value={formData.extras.motivoDeVenta} onChange={handleChange} name="motivoDeVenta" />
                        </div>
                    </div>
                    <div className={styles.oneColumn}>
                        <div className={styles.field}>
                            <label className={styles.label}>Comentarios adicionales</label>
                            <textarea className={styles.inputField} placeholder='Cuentanos cualquier detalle impor tante sobre el auto, daños, modif icaciones, historial de mantenimento, etc' value={formData.extras.comentarios} onChange={handleChange} name="comentarios" />
                        </div>
                    </div>
                    <div className={styles.oneColumn}>
                        <div className={styles.field}>
                            <label className={styles.label}>Confirmo que tengo todos los documentos del vehículo en regla</label>
                            {options.map((option: OptionsInterface) => (
                                <label key={option.value} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="papeleo"
                                        value={option.value}
                                        checked={formData.extras.papeleo?.includes(option.value)}
                                        onChange={handleCheckboxChange}
                                        style={{ marginRight: "5px" }}
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
