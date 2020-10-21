import React, { useEffect, useState } from "react";
import "./App.css";
import PlacesCarousel from "./components/places-carousel/places-carousel.component";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <PlacesCarousel />
    </div>
  );
}

export default App;
