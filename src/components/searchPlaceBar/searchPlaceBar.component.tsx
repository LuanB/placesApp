import React, { useState } from "react";

import Filter from '../filter/filter.component'

import "./search-place-bar-style.scss";

const SearchPlaceBar = () => {

  const [place, setPlace] = useState("Default Place test");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);

  }

  return (
    <div className="search-place-bar-container">
      <Filter value={place} handleChange={handleChange} />
    </div>
  )
};

export default SearchPlaceBar;
