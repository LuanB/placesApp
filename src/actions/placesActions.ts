import React from "react";
import { APIGet } from "../utils";
import { placesType } from "../types";

export const getPlaces = (type: placesType) => {
  return async () => {
    const url = `${type}`;
    const getAPIPlaces = await APIGet(url);
    return getAPIPlaces;
  };
};
