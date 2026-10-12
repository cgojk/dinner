import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";


import imagemobile from "../images/homepage/enjoyable-place-mobile.jpg";
import imagetablet from "../images/homepage/enjoyable-place-tablet.jpg";
import imagedesktop from "../images/homepage/enjoyable-place-desktop.jpg";

import image2mobile from "../images/homepage/locally-sourced-mobile.jpg";
import image2tablet from "../images/homepage/locally-sourced-tablet.jpg";
import image2desktop from "../images/homepage/locally-sourced-desktop.jpg";



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
                    
    
     

   
 
   <div className="info__content">
     <img src={pattern} alt="pattern" className="pattern__info" />

    <h1 className="info__title">Enjoyabe place for all the family</h1>
  
      
    <p className="info__text">Our relaxed surroudnigns make dining with us a great experience for everyone.  We can even arragne a tour of the famr before your meal.</p>
     
   </div>      
    
       


   
      

            <div className="image__info">
                <picture className="image__info">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={image2desktop}
                        />

                        <source
                            media="(min-width: 710px)"
                            srcSet={image2tablet}
                        />

                        <img
                            src={image2mobile}
                            alt="hero"
                            className="image__info"
                        />
                    </picture>
            </div>
                    
    
     

   
 
   <div className="info__content">
     <img src={pattern} alt="pattern" className="pattern__info" />

    <h1 className="info__title">Enjoyabe place for all the family</h1>
  
      
    <p className="info__text">Our relaxed surroudnigns make dining with us a great experience for everyone.  We can even arragne a tour of the famr before your meal.</p>
     
   </div>      
    
       
</section>

  );


}