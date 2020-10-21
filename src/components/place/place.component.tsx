import React from "react";

import "./place-style.scss";

interface IProps {
  title: string;
  img: string;
  location: string;
}

const Place = (props: IProps) => (
  <div className="place-container">

    <img src={props.img} alt="image of location" width="250" height="100" />


    <h1 className="title">{props.title}</h1>
    <p>{props.location}</p>
  </div >
);

export default Place;
