import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Col, Row, Container } from 'react-bootstrap';
import '../App.css'


const SongCard = ({ song, onPlay, onLike, isLiked }) => {
  return (

    <Card className="h-100">
      <Card.Img variant="top" src={song.album.cover_medium} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>{song.artist.name}</Card.Text> 
         <Button onClick={() => onPlay(song)}>Play</Button>
        <Button onClick={() => onLike(song.id)}>
        {isLiked ? 'Unlike' : 'Like'}
      </Button>
      </Card.Body>
    </Card>
 

  );
};

export default SongCard;

