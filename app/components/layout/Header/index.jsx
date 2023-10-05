import Image from "next/image";

import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <div className={styles.mainBoxHeader}>
      <h1>AMPA Fernando Magallanes</h1>
      <section className={styles.boxImages}>
        <Image
          src="/logo260x260.png"
          alt="Logo del ampa"
          width={300}
          height={300}
        />

        <Image
          src="/fotoGeneralColeMod.jpg"
          alt="Foto plano general edificio"
          width={600}
          height={300}
          className={styles.photo}
        />

        <div className={styles.boxIcons}>
          <Link
            href="https://www.instagram.com/ampafernandomagallanes"
            target="_blank"
          >
            <Image
              src="/logorrss/instagram.png"
              alt="logo de instagram"
              width={50}
              height={50}
            />
          </Link>

          <Link
            href="https://www.facebook.com/ampafernandomagallanes"
            target="_blank"
          >
            <Image
              src="/logorrss/facebook.png"
              alt="logo de facebook"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
