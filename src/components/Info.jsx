import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";


// import imagemobile from "../images/homepage/enjoyable-place-mobile.jpg";
// import imagetablet from "../images/homepage/enjoyable-place-tablet.jpg";
// import imagedesktop from "../images/homepage/enjoyable-place-desktop.jpg";

// import image2mobile from "../images/homepage/locally-sourced-mobile.jpg";
// import image2tablet from "../images/homepage/locally-sourced-tablet.jpg";
// import image2desktop from "../images/homepage/locally-sourced-desktop.jpg";


import InfoText from "../InfoText";

import pattern from "../images/patterns/pattern-divide.svg";






export default function Info() {
  return (
    <section className="info__section">
      <ul className="info__list">
        {InfoText.map((info) => (
          <li key={info.id} className="info__item">

            <picture className="image__info">
              <source
                media="(min-width: 1024px)"
                srcSet={info.imageDesktop}
              />

              <source
                media="(min-width: 710px)"
                srcSet={info.imageTablet}
              />

              <img
                src={info.imageMobile}
                alt={info.alt}
                className="image__info"
              />
            </picture>

            <div className="info__content">
              <img
                src={pattern}
                alt=""
                className="pattern__info"
              />

              <h2 className="info__title">
                {info.title}
              </h2>

              <p className="info__text">
                {info.description}
              </p>
            </div>

          </li>
        ))}
      </ul>
    </section>
  );
}