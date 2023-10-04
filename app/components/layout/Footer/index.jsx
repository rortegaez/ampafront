import styles from "./footer.module.css";

export function Footer() {
  const date = new Date().toString();

  return (
    <div className={styles.mainFooter}>
      <span className={styles.mainBoxFooter}>
        <p>{date}</p>
        <p>
          Asociación de Madres y Padres de Alumnos Fernando Magallanes, del CEIP
          Santa Teresa
        </p>
      </span>
    </div>
  );
}
