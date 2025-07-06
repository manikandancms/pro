import React from "react"
import car from "../Assets/01.png" 
import { oonion } from "../Assets/images"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCompo = () => {
    return(
        
        <div>
        <p>image</p>
        {/* <img src={car} alt="local" />
 <img src={oonion} alt="car_cdn" /> */}

  <LazyLoadImage
    alt={oonion}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
    src={oonion} />
);

        </div>

       
    )
}

export default ImageCompo