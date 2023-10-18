import Image from "next/image";
import Link from "next/link";

import { icons } from "../../logic/elements/icons";

import "../../globals.css";

export function Header() {
  return (
    <div className="mainBoxHeader">
      <h1>AMPA Fernando Magallanes</h1>
      <section className="containerImages">
        <Image
          src="/imgGeneral/logo.png"
          priority
          alt="logo del ampa"
          width={300}
          height={300}
          className="photoLogo"
        />
        <Image
          src="/imgGeneral/fotoGeneralColeMod.png"
          priority
          alt="Foto general del colegio"
          width={600}
          height={300}
          className="photoCole"
        />

        <div className="containerIcons">
          {icons.map((item, index) => (
            <Link key={index} href={item.link} target="_blank">
              <Image
                src={item.url}
                alt={item.name}
                width={50}
                height={50}
                className="icon"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
