import React, { useContext, useRef } from 'react';
import styles from "../styles.module.css";
import Image from 'next/image';

//Icons
import filterIcon from '@/assets/icons/forms/car.svg';
import { FormContext } from '@/context/FormContext';

import { CarBrandsTypes, FuelTypes, TransmissionTypes, VehicleConditionsTypes } from "@/data/formData";

interface SelectField {
    label: string;
    value: string;
}

function Index() {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            car: {
                ...prev.car,
                [name]: value
            }
        }))
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.topHeader}>
                    <h2 className={styles.header}><Image src={filterIcon} alt='Automoviles' width={25} height={25} /> Información de tu vehiculo</h2>
                    <p className={styles.paragraph}>Cuéntanos sobre el auto que quieres vender</p>
                </div>
                <div className={styles.form}>
                    <div className={styles.twoColumns}>
                        <div className={styles.field}>
                            <label className={styles.label}>Marca*</label>
                            <select className={styles.selectField} name="marca" value={formData.car.marca} onChange={handleChange}>
                                <option value={"#"}>Selecciona una marca</option>
                                {CarBrandsTypes.map((carBrand: SelectField, index: number) => (
                                    <option key={`${carBrand.value}-${index}`} value={carBrand.value}>{carBrand.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Modelo*</label>
                            <input className={styles.inputField} type='text' placeholder='Ej. Corolla, Civic, Sentra' value={formData.car.modelo} onChange={handleChange} name="modelo" />
                        </div>
                    </div>
                    <div className={styles.threeColumns}>
                        <div className={styles.field}>
                            <label className={styles.label}>Año*</label>
                            <input className={styles.inputField} type='number' min={1990} max={2025} placeholder='Año' value={formData.car.year} onChange={handleChange} name="year" />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Kilometraje*</label>
                            <input className={styles.inputField} type='number' min={0} placeholder='Ej. 50,000 km' value={formData.car.kilometraje} onChange={handleChange} name="kilometraje" />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Precio Esperado*</label>
                            <input className={styles.inputField} type='number' min={0} placeholder='Ej. $ 150,000' value={formData.car.precio} onChange={handleChange} name="precio" />
                        </div>
                    </div>
                    <div className={styles.threeColumns}>
                        <div className={styles.field}>
                            <label className={styles.label}>Combustible*</label>
                            <select className={styles.selectField} value={formData.car.combustible} onChange={handleChange} name="combustible">
                                <option value={"#"}>Selecciona un tipo de combustible</option>
                                {FuelTypes.map((fuelType: SelectField, index: number) => (
                                    <option key={`${fuelType.value}-${index}`} value={fuelType.value}>{fuelType.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Transmisión*</label>
                            <select className={styles.selectField} value={formData.car.transmision} onChange={handleChange} name="transmision">
                                <option value={"#"}>Selecciona un tipo de transmisión</option>
                                {TransmissionTypes.map((transmissionType: SelectField, index: number) => (
                                    <option key={`${transmissionType.value}-${index}`} value={transmissionType.value}>{transmissionType.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Color*</label>
                            <input className={styles.inputField} type='string' placeholder='Ej. Blanco, Negro, Plata' value={formData.car.color} onChange={handleChange} name="color" />
                        </div>
                    </div>
                    <div className={styles.oneColumn}>
                        <div className={styles.field}>
                            <label className={styles.label}>Estado General del Vehiculo*</label>
                            <select className={styles.selectField} value={formData.car.estado} onChange={handleChange} name="estado">
                                <option value={"#"}>Selecciona el estado</option>
                                {VehicleConditionsTypes.map((vehicleConditionsType: SelectField, index: number) => (
                                    <option key={`${vehicleConditionsType.value}-${index}`} value={vehicleConditionsType.value}>{vehicleConditionsType.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
