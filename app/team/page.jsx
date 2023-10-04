import { CardTeam } from "../components/cards/CardTeam";

import styles from "./tema.module.css";

export default function team() {
  return (
    <div className={styles.mainBoxTeam}>
      <h2 className={styles.mainTitle}>Equipo</h2>
      <div className={styles.boxTeam}>
        <CardTeam />
      </div>
    </div>
  );
}
