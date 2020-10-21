export interface IPlace {
  title: string;
  img: string;
  location: string;
}

export interface IPlaces {
  places: IPlace[];
}

export type placesType = "carousel" | "featured";
