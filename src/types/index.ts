import { IActions } from "../context/createAsyncDispatch";

export interface IPlace {
  title: string;
  img: string;
  location: string;
}

export interface IPlaces {
  places: IPlace[];
}

export type placesType = "carousel" | "featured";

export interface IPlacesActions extends IActions {
  type: "SET_PLACES_CAROUSEL" | "SET_PLACES_FEATURE";
  data?: any;
}
