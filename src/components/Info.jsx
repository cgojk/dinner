import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";


import imagemobile from "../images/homepage/enjoyable-place-mobile.jpg";
import imagetablet from "../images/homepage/enjoyable-place-tablet.jpg";
import imagedesktop from "../images/homepage/enjoyable-place-desktop.jpg";

import pattern from "../images/patterns/pattern-divide.svg";






export default function Info(){
    return (
 <section className="info__section ">
   
      

            <div className="image__info">
                <picture className="image__info">
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
                            className="image__info"
                        />
                    </picture>
            </div>
                    
    
     

    <img src={pattern} alt="pattern" className="pattern__info" />

 
   <div className="info__content">
    <h1 className="info__title">Enjoyabe place for all the family</h1>
  
      
    <p className="info__text">Our relaxed surroudnigns make dining with us a great experience for everyone.  We can even arragne a tour of the famr before your meal.</p>
     
   </div>      
    
       
</section>

  );
}