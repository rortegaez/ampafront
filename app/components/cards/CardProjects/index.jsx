import projects from "../../../projects/boxProjects/projects";

import "../cards.css";

export function CardProjects() {
  return (
    <div className="mainBoxCards">
      {projects.map((item, index) => (
        <div key={index} className="boxCard">
          <h3 className="title">{item.title}</h3>
          <p className="paragrah">{item.body}</p>
          <h6 className="date">{item.fecha}</h6>
          <div className="boxImages">{item.img}</div>
        </div>
      ))}
    </div>
  );
}
