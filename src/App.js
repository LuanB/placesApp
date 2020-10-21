import React, { useEffect, useState } from "react";
import "./App.css";
import PlacesCarousel from "./components/places-carousel/places-carousel.component";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <PlacesCarousel />
      </div>
    </AppProvider>
  );
}

export default App;
