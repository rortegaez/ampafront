import Link from "next/link";
import styles from "./navbar.module.css";

//import elementos incluido en el navbar
import navOption from "./navOption";

export function Navbar() {
  return (
    <div className={styles.mainBoxNavbar}>
      <section className={styles.boxElements}>
        <ul className={styles.mainUl}>
          {navOption.map((item, index) => (
            <Link
              className={styles.elements}
              key={index}
              href={item.link}
              target={item.target}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}
