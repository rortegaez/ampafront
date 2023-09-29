import { CardProjects } from "../components/cards/CardProjects";

import styles from "./projects.module.css";

export default function projects() {
  return (
    <div className={styles.mainBoxProjects}>
      <div className={styles.boxProjects}>
        <CardProjects />
      </div>
    </div>
  );
}
