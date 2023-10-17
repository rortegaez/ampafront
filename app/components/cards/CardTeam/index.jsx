import teams from "../../../team/boxTeam/teams";

import "../../../globals.css";

export function CardTeam() {
  return (
    <div className="prev">
      <section className="prev2">
        <p>
          Pronto nos conoceras a todos lo que formamos parte de este equipo que
          vamos a trabajan, junto al equipo docente, para crear el mejor
          ambiente para nuestros hijos/as. Siempre pensando en nuestro niños/as.
        </p>
        <p>Saludos</p>
      </section>
      {teams.map((item) => (
        <div key={item.id} className="boxCardTeam">
          <h3 className="titleCardsTeam">{item.name}</h3>
          <span className="paragrahTeam">
            <p>{item.posicion}</p>
            <p>{item.subPosicion}</p>
          </span>
          <h6 className="email">{item.email}</h6>
          <div className="boxImagesTeam">{item.img}</div>
        </div>
      ))}
    </div>
  );
}
