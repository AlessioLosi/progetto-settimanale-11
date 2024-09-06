
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, toggleLike, setError } from '../redux/actions/Actions';
import SongCard from './SongCard';
import Search from './Search';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.list);
  const likedSongs = useSelector(state => state.likedSongs);
  const error = useSelector(state => state.error);

  useEffect(() => {'sabrina carpenter'}, [dispatch]);

  const handlePlay = (song) => {
    dispatch(playSong(song));
  };

  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };

  return (
    <div>
      <h1>Song List</h1>
      <Search /> 
      {error && <p>Error: {error}</p>}
      <div className="song-list">
        {songs.map(song => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={handlePlay}
            onLike={handleLike}
            isLiked={likedSongs.includes(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
