import React from "react";

import SearchPlaceBar from '../searchPlaceBar/searchPlaceBar.component';
import PlacesCarousel from '../places-carousel/places-carousel.component';
import PlacesFeature from '../places-feature/places-feature.component';

import "./places-container-style.scss";

const PlacesContainer = () => (
  <div className="place-container">
    <h1 className="title">Place parent container</h1>

    <SearchPlaceBar />
    <PlacesCarousel />
    <PlacesFeature />

  </div>
);

export default PlacesContainer;
