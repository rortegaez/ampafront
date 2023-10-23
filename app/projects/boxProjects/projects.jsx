import Image from "next/image";

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
          src="/imgGeneral/logo.png"
          alt="logo del ampa"
          width={250}
          height={250}
        />
      </div>,
    ],
  },
];

export default news;
