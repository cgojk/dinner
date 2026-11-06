import React, { useRef, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import imagemobile from "../images/homepage/hero-bg-mobile@2x.jpg";
import imagetablet from "../images/homepage/hero-bg-tablet.jpg";
import imagedesktop from "../images/homepage/hero-bg-desktop.jpg";
import logo from "../images/logo.svg";


export default function Hero(){
    return (
       
 <section className="hero__section ">
   
      

            <div className="image__hero--container">
                <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={imagedesktop}
                        />

                        <source
                            media="(min-width: 710px)"
                            srcSet={imagetablet}
                        />

                        <img
                            src={imagemobile}
                            alt="hero"
                            className="image__hero"
                        />
                    </picture>
            </div>
                    
    
   <div className="hero__content">
   <img src={logo} alt="logo" className="hero__logo"/>
   <h2 className="hero__title">Exquisite dining since 1989</h2>
      
    <p className="hero__text">Experience our seasonal menu in beautiful country surroundings.  Eat the freshest produce form the comfort of our farmhouse.</p>
     <Button
          to="/booking"
          className="button__container"
        >
          Book a Table
        </Button>
   </div>      
    
       

</section>
  );
}