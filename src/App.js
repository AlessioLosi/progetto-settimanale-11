import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/Navbar';
import MainContent from './components/MainSection';
import SongList from './components/SongList';



function App() {


  return (
    <div className="App">
      <>
      <ColorSchemesExample/>
      <MainContent/>
     </>
    </div>
  );
}

export default App;

