
import React from "react";
import readydesktop from "../images/homepage/ready-bg-desktop.jpg";
import readytablet from "../images/homepage/ready-bg-tablet.jpg";
import readymobile from "../images/homepage/ready-bg-mobile.jpg";
import Button from "./Button";



export default function Footer() {
  return (
    <>
      {/* First section: white background */}
      <section className="info__section info__section--light">
      
              <picture className="image__info">
                <source
                  media="(min-width: 1024px)"
                  srcSet={readydesktop}
                />

                <source
                  media="(min-width: 710px)"
                  srcSet={readytablet}
                />

                <img
                  src={readymobile}
                  alt="A plate with food on it"
                  className="image__info"
                />
              </picture>
                 

              <div className="info__content">
              

                <h2 className="info__title">Ready to make a reservation?</h2>

            <Button
                     to="/booking"
                     className="button__container"
                   >
                     Book a Table
                   </Button>
              </div>
        
     
     
      </section>
</>
  );
      
}