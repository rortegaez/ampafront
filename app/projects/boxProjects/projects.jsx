import Image from "next/image";

/* import imgOne from "../boxImg/imgOne";
import imgTwo from "../boxImg/imgTwo"; */

const news = [
  {
    id: 1,
    title: "Estamos empezando...",
    body:
      "<p>En este apartado iremos colocando, todas las actividades que vayamos haciendo como AMPA. Con la ayuda de tod@s seguro que ya mismo estamos llenando de eventos este apartado.</p>" +
      "<p>Así que animos y un saludo</p>",
    fecha: "Thu Oct 05 2023",
    img: [
      <div>
        <Image
          src="/logo260x260.png"
          alt="logo del ampa"
          width={250}
          height={250}
        />
        {/* {imgOne.map((item, index) => (
          <span key={index}>
            <Image src={item.route} alt={item.alt} width={250} height={250} />
          </span>
        ))} */}
      </div>,
    ],
  },
  /*
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
  }, */
];

export default news;
