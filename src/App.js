import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/Navbar';
import MainContent from './components/MainSection';
import SongList from './components/SongList';
import MusicPlayer from './components/Player';



function App() {


  return (
    <div className="App">
      <>
      <ColorSchemesExample/>
      <MainContent/>
      <SongList/>
      <MusicPlayer/>
     </>
    </div>
  );
}

export default App;

