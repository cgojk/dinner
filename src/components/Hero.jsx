import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import imagemobile from "../images/homepage/hero-bg-mobile.jpg";
import imagetablet from "../images/homepage/hero-bg-tablet.jpg";
import imagedesktop from "../images/homepage/hero-bg-desktop.jpg";




export default function Hero(){
    return (
 <section className="hero__section ">
   
      

            <div className="image__hero">
                <picture className="image__hero">
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
                    
    
     

 
          
    
       
</section>

  );
}