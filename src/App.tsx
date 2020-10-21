import React, { useEffect, useState } from "react";
import "./App.css";
import PlacesContainer from './components/places-container/places-container.component';
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <PlacesContainer />
      </div>
    </AppProvider>
  );
}

export default App;
