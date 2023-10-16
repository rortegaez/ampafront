import "../../globals.css";

export function Footer() {
  const date = new Date().toString();

  return (
    <div className="mainBoxFooter">
      <span className="mainFooter">
        <p>{date}</p>
        <p>
          Asociación de Madres y Padres de Alumnos Fernando Magallanes, del CEIP
          Santa Teresa
        </p>
      </span>
    </div>
  );
}
