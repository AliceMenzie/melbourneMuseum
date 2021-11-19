import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactSlidy from "react-slidy";
import 'react-slidy/lib/styles.css'
import SimpleImageSlider from "react-simple-image-slider";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MuseumContent() {
  const [museum, setMuseum] = useState([]);

  // const [slider, setSlider] = useState(0);
  // const length = museum.length;

  async function getMuseumData() {
    const response = await fetch(
      "https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apikey: "8ccd608e-ea9d-46c0-b1bb-8e00242962a1",
        },
      }
    );

    const data = await response.json();

    return setMuseum(data);
  }

  useEffect(() => {
    getMuseumData();
  }, []);

  console.log(museum);
  

  return (
    <div>
      {/* <FaArrowAltCircleLeft className="right-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
      {/* <Carousel responsive={responsive}> */}
        <ReactSlidy numOfSlides={3} imageObjectFit="contain" useFullWidth={false}>
        
        {museum.map((item) => (
          <div>
            {/* {item.objectName} */}
            {/* <img className="image" src={item.thumbnail.uri} alt="museum item" /> */}
            

            {item.media.map((image) => (
              <img style={{maxHeight: '300px', maxWidth: '300px'}}
              className="img-slider" src={image.thumbnail.uri} alt="museum item" />
            ))}
            {/* <img src= {item.media.thumbnail.uri} alt='item' /> */}

            
          </div>
        ))}
      {/* </Carousel> */}
      </ReactSlidy>
    </div>
  );
}
