import Image from "next/image";

import imgOne from "../boxImg/imgOne";
import imgTwo from "../boxImg/imgTwo";

const news = [
  {
    id: 1,
    title: "Proyectos",
    body: "Esto va a ir de menos a más",
    fecha: "Fri Sep 29 2023 19:33:40",
    img: [
      <div>
        {imgOne.map((item, index) => (
          <span key={index}>
            <Image src={item.route} alt={item.alt} width={250} height={250} />
          </span>
        ))}
      </div>,
    ],
  },
  {
    id: 2,
    title: "Noticias 2",
    body: "Esto va a ir de menos a más y ya va un poco más",
    fecha: "Fri Sep 29 2023 19:37:40",
    img: [
      <div>
        {imgTwo.map((item, index) => (
          <span key={index}>
            <Image src={item.route} alt={item.alt} width={250} height={250} />
          </span>
        ))}
      </div>,
    ],
  },
];

export default news;
