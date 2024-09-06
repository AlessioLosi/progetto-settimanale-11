import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, toggleLike } from '../redux/actions/Actions';
import SongCard from './SongCard';
import Search from './Search';
import { getSongsAction } from '../redux/actions/Actions';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.list);
  const likedSongs = useSelector(state => state.likedSongs);


  const searchSongs = (query) => {
    dispatch(getSongsAction(query));
  };


  useEffect(() => {
    searchSongs('sabrina carpenter'); 
  }, [dispatch]);


  const handlePlay = (song) => {
    dispatch(playSong(song));
  };

  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };
  return (
    <div>
      <Search onSearch={searchSongs} /> 
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