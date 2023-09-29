import Image from "next/image";

const teams = [
  {
    id: 1,
    name: "Raúl",
    email: "raul@raul.com",
    posicion: "Presidente",
    subPosicion: "Presidente",
    img: (
      <Image
        src="/imgTeam/face001.jpg"
        alt="imagen 001"
        width={150}
        height={150}
      />
    ),
  },
  {
    id: 1,
    name: "Eva",
    email: "eva@eva.com",
    posicion: "Tesorera",
    subPosicion: "Tesorera",
    img: (
      <Image
        src="/imgTeam/face002.jpg"
        alt="imagen 002"
        width={150}
        height={150}
      />
    ),
  },
];

export default teams;
