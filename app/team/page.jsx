import { CardTeam } from "../components/cards/CardTeam";

import "../globals.css";

export default function team() {
  return (
    <div className="mainBoxTeam">
      <h2 className="mainTitle">Equipo</h2>
      <div className="boxTeam">
        <CardTeam />
      </div>
    </div>
  );
}
