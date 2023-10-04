import Image from "next/image";

import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.mainBoxHeader}>
      <h1>AMPA Fernando Magallanes</h1>
      <section className={styles.boxImages}>
        <Image
          src="/fotoGeneralColeMod.jpg"
          alt="Foto plano general edificio"
          width={600}
          height={300}
          className={styles.photo}
        />

        <Image
          src="/logo260x260.png"
          alt="Logo del ampa"
          width={300}
          height={300}
        />
      </section>
    </div>
  );
}
