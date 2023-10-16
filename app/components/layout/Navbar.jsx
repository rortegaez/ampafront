import Link from "next/link";

import "../../globals.css";

//import elementos incluido en el navbar
import navOption from "../../logic/elements/navOption";

export function Navbar() {
  return (
    <div className="mainBoxNavbar">
      <section className="boxElements">
        <ul className="mainUl">
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
        </ul>
      </section>
    </div>
  );
}
