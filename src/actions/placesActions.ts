import React from "react";
import { APIGet } from "../utils";

export const getPlaces = (type: string) => {
  return async () => {
    const url = `trays?kit_id=${kitID}&kit_instance_id=${kitInstanceID}&order_id=${orderID}&stage=${stage}`;
    const getTraysInKit = await APIGet(url, accessToken);
    return getTraysInKit;
  };
};
