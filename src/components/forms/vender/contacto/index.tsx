import React, { useContext, useRef } from 'react';
import styles from "../styles.module.css";
import Image from 'next/image';

//Icons
import UserIcon from '@/assets/icons/forms/user.svg';
import { FormContext } from '@/context/FormContext';

interface Props { }

function Index(props: Props) {
    const { } = props

    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            user: {
                ...prev.user,
                [name]: value
            }
        }))
    }

    return (
        <div className={styles.container}>
            <div className={styles.topHeader}>
                <h2 className={styles.header}><Image src={UserIcon} alt='Automoviles' width={25} height={25} /> Tus Datos de Contacto</h2>
                <p>Agrega tu información personal para poder contactarte y coordinar la evaluación.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.twoColumns}>
                    <div className={styles.field}>
                        <label className={styles.label}>Nombre(s)*</label>
                        <input className={styles.inputField} type='text' placeholder='Tu nombre(s)' value={formData.user.nombre} onChange={handleChange} name="nombre" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Apellido(s)*</label>
                        <input className={styles.inputField} type='text' placeholder='Tus Apellidos' value={formData.user.apellidos} onChange={handleChange} name="apellidos" />
                    </div>
                    
                </div>
                <div className={styles.twoColumns}>
                    <div className={styles.field}>
                        <label className={styles.label}>Teléfono*</label>
                        <input className={styles.inputField} type='text' placeholder='Ej. 55 1234 5674' value={formData.user.telefono} onChange={handleChange} name="telefono" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Email*</label>
                        <input className={styles.inputField} type='text' placeholder='tu@email.com' value={formData.user.email} onChange={handleChange} name="email" />
                    </div>
                </div>
                <div className={styles.oneColumn}>
                    <div className={styles.field}>
                        <label className={styles.label}>Dirección*</label>
                        <input className={styles.inputField} type='text' placeholder='Calle, número, colonia, CP' value={formData.user.address} onChange={handleChange} name="address" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index
