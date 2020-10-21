import React from "react";
import { APIGet } from "../utils";
import { IPlacesActions, placesType, IPlace } from "../types";
import { IActions } from "../context/createAsyncDispatch";

type IPlaceDispatch = React.Dispatch<IPlacesActions>;

export interface ISetPlacesCarouselAction extends IActions {
  type: "SET_PLACES_CAROUSEL";
  places: IPlace[];
}

export interface ISetPlacesFeatureAction extends IActions {
  type: "SET_PLACES_FEATURE";
  places: IPlace[];
}

export type IPlacesAction = ISetPlacesCarouselAction | ISetPlacesFeatureAction;

/* Actions */

export const setPlacesCarouselAction = (
  places: IPlace[] | null
): ISetPlacesCarouselAction => ({
  type: "SET_PLACES_CAROUSEL",
  places,
});

export const setPlacesFeatureAction = (
  places: IPlace[] | null
): ISetPlacesFeatureAction => ({
  type: "SET_PLACES_FEATURE",
  places,
});

export const setPlacesCarousel = (places: IPlace[]) => {
  return (dispatch: IPlaceDispatch) => {
    dispatch(setPlacesCarouselAction(places));
  };
};

export const setPlacesFeature = (places: IPlace[]) => {
  return (dispatch: IPlaceDispatch) => {
    dispatch(setPlacesFeatureAction(places));
  };
};

export const getPlaces = (type: placesType) => {
  return async () => {
    const url = `${type}`;
    const getAPIPlaces = await APIGet(url);
    return getAPIPlaces;
  };
};
