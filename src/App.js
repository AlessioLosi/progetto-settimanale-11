import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/Navbar';
import MainContent from './components/MainSection';
import SongList from './components/SongList';
import MusicPlayer from './components/Player';
import StaticArtistCards from './components/StaticCards';
import { Col, Row, Container } from 'react-bootstrap';
import './App.css'



function App() {


  return (
    <div className="App">
      <>
      <Container><Row><Col xs='3'>
      <ColorSchemesExample/></Col>
      <Col>
        <Row>
          <Col>
            <MainContent /> 
          </Col>
        </Row>

        <Row>
          <Col>
            <SongList /> 
          </Col>
        </Row>

        <Row>
          <Col>
            <StaticArtistCards /> 
          </Col>
        </Row>

        <Row>
          <Col>
            <MusicPlayer  className='music-player'/> 
          </Col>
        </Row>
      </Col>

      </Row></Container>
     </>
    </div>
  );
}

export default App;

