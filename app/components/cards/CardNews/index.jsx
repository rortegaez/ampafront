// "use client";

import news from "../../../news/boxNews/news";

import "../../../globals.css";

export function CardNews() {
  return (
    <div className="mainBoxCards">
      {news.map((item) => (
        <div className="boxCard" key={item.id}>
          <h3 className="titleCards">{item.title}</h3>
          <div
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
