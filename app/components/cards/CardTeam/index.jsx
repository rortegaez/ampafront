import teams from "../../../team/boxTeam/teams";

import "../cards.css";

export function CardTeam() {
  return (
    <div>
      <div className="prev">
        <p>
          Pronto nos conoceras a todos lo que formamos parte de este equipo que
          vamos a trabajan, junto al equipo docente, para crear el mejor
          ambiente para nuestros hijos/as. Siempre pensando en nuestro niños/as.
        </p>
        <p>Saludos</p>
      </div>
      {teams.map((item, index) => (
        <div key={index} className="boxCardTeam">
          <h3 className="titleCards">{item.name}</h3>
          <span className="paragrahTeam">
            <p>{item.posicion}</p>
            <p>{item.subPosicion}</p>
          </span>
          <h6 className="email">{item.email}</h6>
          <div className="boxImages">{item.img}</div>
        </div>
      ))}
    </div>
  );
}
