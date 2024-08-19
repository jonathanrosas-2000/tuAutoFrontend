import PrincipalLayout from "@/layout/PrincipalLayout";
import "@/styles/globals.css";
import styles from "./contacto.module.css";

import { BreadCrumb, SeoMeta } from "@/components";
import Image from "next/image";

//Icons
import Down from "@/assets/downBar.png";
import Logo from "@/assets/LogoWhite.svg";

const Contacto = () => {
  const Steps = [
    { title: "Home", link: "/" },
    { title: "Contacto", link: "/contacto" },
  ];

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
        <form className={styles.form}>
          <h3 className={styles.title}>Mandanos un mensaje</h3>
          <div className={styles.gap}>
            <input
              type="text"
              placeholder="Nombre(s)"
              className={styles.textInput}
            />
            <input
              type="text"
              placeholder="Apellido(s)"
              className={styles.textInput}
            />
            <input
              type="text"
              placeholder="Correo"
              className={styles.textInput}
            />
            <input
              type="text"
              placeholder="Telefono"
              className={styles.textInput}
            />
          </div>
          <input
            type="text"
            placeholder="En que coche esta interesado?"
            className={styles.textInput}
          />
          <textarea placeholder="Mensaje" className={styles.textInput} />
          <input type="submit" value="Enviar" className={styles.send} />
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
