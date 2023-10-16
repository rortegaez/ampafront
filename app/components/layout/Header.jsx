import Image from "next/image";
import Link from "next/link";

import { imagesHeader } from "../../logic/elements/imagesHeader";
import { icons } from "../../logic/elements/icons";

import "../../globals.css";

export function Header() {
  return (
    <div className="mainBoxHeader">
      <h1>AMPA Fernando Magallanes</h1>
      <section className="containerImages">
        <Image
          src="/imgGeneral/logo260x260.png"
          alt="logo del ampa"
          width={600}
          height={300}
          className="photoLogo"
        />
        <Image
          src="/imgGeneral/fotoGeneralColeMod.jpg"
          alt="Foto general del colegio"
          width={600}
          height={300}
          className="photoCole"
        />
        {/* {imagesHeader.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt={item.name}
            width={600}
            height={300}
            className="photo"
          />
        ))} */}

        <div className="containerIcons">
          {icons.map((item, index) => (
            <Link href={item.link} target="_blank">
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
