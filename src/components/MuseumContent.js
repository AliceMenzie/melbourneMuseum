import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "react-bootstrap/Carousel";

// import Carousel from "react-multi-carousel";

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
    <div className='container-fluid'>
      <Carousel variant="dark">
        {museum.map((item, index) => index < 5 && (
          <Carousel.Item>
            {item.media.map((image) => (
              <img
                className="d-block w-50 api-image"
                src={image.thumbnail.uri}
                alt="museum item"
              />
            ))}
            <Carousel.Caption>
                {item.objectName}
              </Carousel.Caption> 
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

