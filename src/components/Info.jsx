
import React from "react";
import InfoText from "../InfoText";
import pattern from "../images/patterns/pattern-divide.svg";

export default function Info() {
  return (
    <>
      {/* First section: white background */}
      <section className="info__section info__section--light">
        <ul className="info__list">
          {InfoText.filter((info) => info.id === 1 || info.id === 2).map((info) => (
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
                <img src={pattern} alt="" className="pattern__info" />

                <h2 className="info__title">{info.title}</h2>

                <p className="info__text">{info.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Second section: black background */}
      <section className="info__section info__section--dark">
        <ul className="info__list">
          {InfoText.filter((info) => [3, 4, 5].includes(info.id)).map((info) => (
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
                <img src={pattern} alt="" className="pattern__info" />

                <h2 className="info__title">{info.title}</h2>

                <p className="info__text">{info.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}