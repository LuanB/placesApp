import axios from "axios";
import { API_URL } from "../config";

export const APIGet = async (url: string) => {
  const newGetRequest = axios
    .get(`${API_URL}${url}`, {
      validateStatus: (status: number) => status === 200,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("API error");
      return { error: err };
    });

  return newGetRequest;
};
