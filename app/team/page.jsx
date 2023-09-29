import { CardTeam } from "../components/cards/CardTeam";

import styles from "./tema.module.css";

export default function team() {
  return (
    <div className={styles.mainBoxTeam}>
      <div className={styles.boxTeam}>
        <CardTeam />
      </div>
    </div>
  );
}
