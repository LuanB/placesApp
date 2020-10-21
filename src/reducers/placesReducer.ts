import { IPlacesAction } from "../actions/placesActions";

export const placesReducer = (state: any, action: IPlacesAction) => {
  switch (action.type) {
    case "SET_PLACES_CAROUSEL":
      return {
        ...state,
        placesCarousel: action.places,
      };
    case "SET_PLACES_FEATURE":
      return {
        ...state,
        placesFeature: action.places,
      };
    default:
      return state;
  }
};

export default placesReducer;
