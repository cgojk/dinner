import React from "react";
import familygattering from "../images/homepage/family-gathering-desktop.jpg";
import familygatteringtablet from "../images/homepage/family-gathering-tablet.jpg";
import familygatteringmobile from "../images/homepage/family-gathering-mobile.jpg";
import Button from "./Button";

export default function ThirdSection() {
  return (
    <>
      {/* First section: white background */}
      <section className="info__section info__section--light">
        <ul className="info__list">
            <li className="info__item">
           
              <picture className="image__info">
                <source
                  media="(min-width: 1024px)"
                  srcSet={familygattering}
                />

                <source
                  media="(min-width: 710px)"
                  srcSet={familygatteringtablet}
                />

                <img
                  src={familygatteringmobile}
                  alt="Family Gathering"
                  className="image__info"
                />
              </picture>
              <ul className="menu__list">
                <li className="menu__item">Family Gethering</li>
                <li className="menu__item">Special Events</li>
                <li className="menu__item">Social Events</li>
              </ul>

              <div className="info__content">
             
                <h2 className="info__title">Family Gathering</h2>

                <p className="info__text">We love for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.</p>
              </div>
            </li>
   
        </ul>
        <Button
                 to="/booking"
                
                 variant="dark"
                  className="button__container"
               >
                 Book a Table
        </Button>
    </section>

     
     </>
  );
}