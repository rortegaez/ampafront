"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import "../../globals.css";

//import elementos incluido en el navbar
import navOption from "../../logic/elements/navOption";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mainBoxNavbar">
      <Image
        src={"/menu.png"}
        alt="icono menu"
        width={30}
        height={30}
        className="btn-open"
        onClick={handleOpen}
      />
      <section className={`boxElements ${isOpen && "visible"}`}>
        <div className="boxMenu">
          {navOption.map((item, index) => (
            <Link
              className="elements"
              key={index}
              href={item.link}
              target={item.target}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
