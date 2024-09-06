import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../redux/actions/Actions';
import SongCard from './SongCard';
import { toggleLike } from '../redux/actions/Actions';
import { Card, Col, Row, Container, Button} from 'react-bootstrap';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.list);
  const likedSongs = useSelector(state => state.songs.likedSongs);

  const handlePlay = (song) => {
    dispatch(playSong(song));
  };

  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };

  return ( <Container >
    <Row >
      {songs.map(song => (
        <Col key={song.id} xs={3} className="mb-4">
          <SongCard
            song={song}
            onPlay={handlePlay}
            onLike={handleLike}
            isLiked={likedSongs.includes(song.id)}
          />
        </Col>
      ))}
    </Row>
  </Container>
   
  );
};

export default SongList;
