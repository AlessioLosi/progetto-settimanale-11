import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Container, Button} from 'react-bootstrap';
import '../App.css'



const StaticArtistCards = () => {
  const [oliviaSongs, setOliviaSongs] = useState([]);
  const [taylorSongs, setTaylorSongs] = useState([]);
  const [gracieSongs, setGracieSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const oliviaResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Olivia+Rodrigo");
        const oliviaData = await oliviaResponse.json();
        setOliviaSongs(oliviaData.data.slice(0, 4));

        const taylorResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Taylor+Swift");
        const taylorData = await taylorResponse.json();
        setTaylorSongs(taylorData.data.slice(0, 4));

        const gracieResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Gracie+Abrams");
        const gracieData = await gracieResponse.json();
        setGracieSongs(gracieData.data.slice(0, 4));
      } catch (error) {
        console.error("Errore nel recupero delle canzoni: ", error);
      }
    };

    fetchSongs();
  }, []);

  const renderCard = (song) => (
    <Col key={song.id} md={3} className="mb-4 d-flex">
      <Card className="h-100">
        <Card.Img variant="top" src={song.album.cover_medium} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container>
      <h2 className="my-4 text-light">Olivia Rodrigo</h2>
      <Row>
        {oliviaSongs.map(renderCard)}
      </Row>

      <h2 className="my-4 text-light">Taylor Swift</h2>
      <Row>
        {taylorSongs.map(renderCard)}
      </Row>

      <h2 className="my-4 text-light">Gracie Abrams</h2>
      <Row>
        {gracieSongs.map(renderCard)}
      </Row>
    </Container>
  );
};

export default StaticArtistCards;
