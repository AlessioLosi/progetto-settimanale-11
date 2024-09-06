import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../App.css'

const MusicPlayer = () => {
  const currentSong = useSelector(state => state.songs.currentSong);

  return (
    <Container fluid className="music-player">
    <Row className="align-items-center">
      {currentSong ? (
        <>
          <Col xs="auto">
            <img src={currentSong.album.cover_medium} alt={currentSong.title} className="song-image" />
          </Col>
          <Col>
            <div className="text-light">
              <h5>{currentSong.title}</h5>
              <p>{currentSong.artist.name}</p>
            </div>
          </Col>
        </>
      ) : (
        <Col>
          <p>No song selected</p>
        </Col>
      )}
    </Row>
  </Container>
  );
};

export default MusicPlayer;
