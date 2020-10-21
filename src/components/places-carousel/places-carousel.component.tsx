import React from "react";
import Carousel from "react-multi-carousel";
import Place from '../place/place.component';
import "../../../node_modules/react-multi-carousel/lib/styles.css";

import "./places-carousel-style.scss";
import { IPlace } from "../../types";

interface IProps {
  places: IPlace[] | null;
}

const PlacesCarousel = (props: IProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log("places is ", props.places);

  return (
    <div className="places-carousel-container">
      <h1 className="title">Places carousel</h1>
      <Carousel responsive={responsive}>
        {props.places && props.places.map((place, i) => {
          return (
            <Place key={i} title={place.title} img={place.img} location={place.location} />

          )
        })}
      </Carousel>
    </div >
  );
};

export default PlacesCarousel;
