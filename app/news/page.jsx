import { CardNews } from "../components/cards/CardNews/index";

import styles from "./activities.module.css";

export default function activities() {
  return (
    <div className={styles.mainBoxActivities}>
      <h2 className={styles.mainTitle}>Noticias</h2>
      <div className={styles.boxActivities}>
        <CardNews />
      </div>
    </div>
  );
}
