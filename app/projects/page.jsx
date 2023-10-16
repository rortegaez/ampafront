import { CardProjects } from "../components/cards/CardProjects";

import "../globals.css";

export default function projects() {
  return (
    <div className="mainBoxProjects">
      <h2 className="mainTitle">Actividades</h2>
      <div className="boxProjects">
        <CardProjects />
      </div>
    </div>
  );
}
