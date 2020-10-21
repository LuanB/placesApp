import React, { useEffect } from "react";

import { usePlaceCarousel, usePlaceFeature } from '../../context';

import SearchPlaceBar from '../searchPlaceBar/searchPlaceBar.component';
import PlacesCarousel from '../places-carousel/places-carousel.component';
import PlacesFeature from '../places-feature/places-feature.component';

import "./places-container-style.scss";
import { APIGet } from "../../utils";

const PlacesContainer = () => {



  const [placesCarouselState, placesCarouselDispatch] = usePlaceCarousel();

  const [placesFeatureState, placesFeatureDispatch] = usePlaceFeature();


  useEffect(() => {
    getPlacesCarousel()
    getPlacesFeatured()
  }, [])

  const getPlacesCarousel = async () => {
    const placesCarousel = await APIGet('/carousel');
    console.log(placesCarousel);
  }

  const getPlacesFeatured = async () => {
    const placesFeatured = await APIGet('/featured');
    console.log(placesFeatured);
  }



  return (
    <div className="place-container">
      <h1 className="title">Place parent container</h1>

      <SearchPlaceBar />
      <PlacesCarousel />
      <PlacesFeature />

    </div>
  );
}

export default PlacesContainer;
