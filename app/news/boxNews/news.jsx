import Image from "next/image";

import imgOne from "../boxImg/imgOne";

const news = [
  {
    id: 1,
    title: "El AMPA esta llegando...",
    body:
      "<p>Al final del curso pasado, tras una reunión informativa que realizo el colegio, dirigida por el director. Un grupo de padres, decidimos unirnos para que el colegio volviese a tener AMPA. El estreno de nuestra página web, es un paso más de los que ya se están dando.</p>" +
      "<p>Actualmente estamos en el proceso de constituir el AMPA. Esta todo el proceso en marcha, pero estamos pendiente que nos llegue la confirmación desde al administración. En cuanto lo tengamos listo, os iremos informado.</p>" +
      "<p>Pero la publicación de nuestra web, es un paso más para que los padres del Colegio Santa Teresa, podemos tener un lugar más, donde exponer nuestras dudas y entre todos ayudar, para resolver esas dudas y mejorar en lo posible la convivencia en nuestro colegio.</p>" +
      "<p>Para todo los padres que quieran aquí estamos dispuesto a ayudar en lo que podamos. </p>" +
      "<p>Un saludo</p>" +
      "<p>AMPA Fernando Magallanes</p>",
    fecha: "Wed Oct 04 2023",
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
];

export default news;
