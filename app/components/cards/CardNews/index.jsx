import news from "../../../news/boxNews/news";

import "../cards.css";

export function CardNews() {
  return (
    <div className="mainBoxCards">
      {news.map((item, index) => (
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
