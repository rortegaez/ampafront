import { CardNews } from "../components/cards/CardNews/index";

import styles from "./activities.module.css";

export default function activities() {
  return (
    <div className={styles.mainBoxActivities}>
      <div className={styles.boxActivities}>
        <CardNews />
      </div>
    </div>
  );
}
