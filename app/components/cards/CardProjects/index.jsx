import projects from "../../../projects/boxProjects/projects";

import "../../../globals.css";

export function CardProjects() {
  return (
    <div className="mainBoxCards">
      {projects.map((item, index) => (
        <div key={index} className="boxCard">
          <h3 className="titleCards">{item.title}</h3>
          <p
            /* dangerouslySetInnerHTML es para tomar un texto plano con elemento html y que se pueda mostrar .map */
            dangerouslySetInnerHTML={{ __html: item.body }}
            className="paragrah"
          />
          <h6 className="date">{item.fecha}</h6>
          <div className="boxImages">{item.img}</div>
        </div>
      ))}
    </div>
  );
}
