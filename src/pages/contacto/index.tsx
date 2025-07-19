import React, { useState } from "react";
import PrincipalLayout from "@/layout/PrincipalLayout";
import "@/styles/globals.css";
import styles from "./contacto.module.css";

import { BreadCrumb, SeoMeta } from "@/components";
import Image from "next/image";

//Icons
import Down from "@/assets/downBar.png";
import Logo from "@/assets/LogoWhite.svg";

interface FormInput {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const defaultFormInput: FormInput = {
  name: '',
  lastname: '',
  email: '',
  interest: '',
  message: '',
  phone: ''
};

const Contacto = () => {
  const [formData, setFormData] = useState<FormInput>(defaultFormInput);
  const [confirmation, setConfirmation] = useState<Boolean>(false);
  const Steps = [
    { title: "Home", link: "/" },
    { title: "Contacto", link: "/contacto" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormData(defaultFormInput);

    // const res = await fetch("/api/contacto", {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // if (res.ok) {
    //   setConfirmation(true);
    //   setFormData(defaultFormInput);
    // }
  };

  return (
    <PrincipalLayout>
      <SeoMeta
        title="Compra Segura de Autos Seminuevos en México"
        description="Conoce a TuAutoSeminuevo.com y descubre cómo facilitamos la compra segura de autos seminuevos en México. Aprende sobre nuestra misión, valores y el compromiso con nuestros clientes."
        keywords={[
          "autos seminuevos",
          "compra segura de autos",
          "vehículos usados en México",
          "compra de coches seminuevos",
          "transacciones seguras de autos",
        ]}
        subject="Facilitando la Compra Segura de Autos Seminuevos en México"
      />

      <div className={styles.header}>
        <BreadCrumb steps={Steps} />
        <h1 className={styles.title}>Contacto</h1>
        <Image src={Down} alt="Down Bar" width={200} height={10} />
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.title}>Mandanos un mensaje</h3>
          <div className={styles.gap}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Nombre(s)"
              className={styles.textInput}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Apellido(s)"
              className={styles.textInput}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Correo"
              className={styles.textInput}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Telefono"
              className={styles.textInput}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            placeholder="¿En que coche esta interesado?"
            className={styles.textInput}
            onChange={handleChange}
          />
          <textarea name="message" placeholder="Mensaje" value={formData.message} className={styles.textInput} onChange={handleChange} />
          <input type="submit" value="Enviar" className={styles.send} />
          {confirmation && (
            <h3>Mensaje enviado correctamente</h3>
          )}
        </form>
        <div className={styles.info}>
          <h3>Necesitas ayuda? Contactanos</h3>
          <p>
            Si tienes cualqier duda o pregunta de un vehiculo en especifico no
            dudes en contactarnos para compartirte información
          </p>
          <Image
            src={Logo}
            alt="Logo TuAutoSeminuevo.com"
            width={400}
            height={100}
          />
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default Contacto;
