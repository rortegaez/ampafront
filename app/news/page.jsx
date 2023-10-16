import { CardNews } from "../components/cards/CardNews/index";

import "../globals.css";

export default function activities() {
  return (
    <div className="mainBoxNews">
      <h2 className="mainTitle">Noticias</h2>
      <div className="boxNews">
        <CardNews />
      </div>
    </div>
  );
}
