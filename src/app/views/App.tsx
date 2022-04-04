import React, { useEffect, useState } from 'react';
import { ArtSection } from './app-sections/art-section';
import { Navigation } from './app-sections/nav-section/Navigation';
import { AppTitle } from './app-sections/title-section/AppTitle';
import { appStyles } from './App.styles';
const App = () => {
  const app = appStyles().app;
  const [soldPieces, setSoldPieces ] = useState([]);
  const [portfolioPieces, setPortFolioPieces ] = useState([]);
  const [availablePieces, setAvailablePieces ] = useState([]);
  
  return (
    <div style={app}>
      <AppTitle/>
      <Navigation/>
      <ArtSection/>
    </div>
  );
}

export default App;
