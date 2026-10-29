
import React from "react";
import readydesktop from "../images/homepage/ready-bg-desktop.jpg";
import readytablet from "../images/homepage/ready-bg-tablet.jpg";
import readymobile from "../images/homepage/ready-bg-mobile.jpg";
import Button from "./Button";



export default function Footer() {
  return (
    <>
      {/* First section: white background */}
      <section className=" info__section--footer">
      
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
              

                <h2 className="info__title">Ready to make a </h2>
                  <h2 className="info__title">reservation?</h2>
 <Button
                         to="/booking"
                        
                         variant="light"
                          className="button__container"
                       >
                         Book a Table
                </Button>
     
           
              </div>
        
     <div className="footer__text">
        <h1 className="footer__title">dine</h1>
        <p>Morthwaite, Sedbergh Cumbria </p>
        <p>+44 123 4567 890</p>
        <p>OPEN TIMES</p>
        <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
        <p>Sat - Sun: 09:00 AM - 11:00 PM</p>
     </div>
      </section>
</>
  );
      
}