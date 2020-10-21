import React, { useEffect, useState } from "react";

import { usePlaceCarousel, usePlaceFeature } from '../../context';

import SearchPlaceBar from '../searchPlaceBar/searchPlaceBar.component';
import PlacesCarousel from '../places-carousel/places-carousel.component';
import PlacesFeature from '../places-feature/places-feature.component';

import "./places-container-style.scss";
import { APIGet } from "../../utils";
import { setPlacesCarousel } from "../../actions/placesActions";

const PlacesContainer = () => {

  const [placesCarouselState, placesCarouselDispatch] = usePlaceCarousel();

  const [placesFeatureState, placesFeatureDispatch] = usePlaceFeature();

  const [placesCarousel, setPlacesCarouselState] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlacesCarousel();
    // getPlacesFeatured();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getPlacesCarousel = async () => {
    const placesCarousel = await APIGet('/carousel');
    console.log("response from API is ", placesCarousel);
    setPlacesCarouselState(placesCarousel.data);
    setLoading(false);
    // save into context
    placesCarouselDispatch(setPlacesCarousel(placesCarousel));



  }

  const getPlacesFeatured = async () => {
    const placesFeatured = await APIGet('/featured');
    console.log(placesFeatured);
  }


  return (
    <div className="place-container">
      <h1 className="title">Place parent container</h1>
      {
        loading ?
          <p>Loading...</p>
          :
          <>
            <SearchPlaceBar />
            <PlacesCarousel places={placesCarousel} />
            <PlacesFeature />
          </>

      }


    </div>
  );
}

export default PlacesContainer;
