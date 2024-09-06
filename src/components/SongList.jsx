import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../redux/actions/Actions';
import SongCard from './SongCard';
import { toggleLike } from '../redux/actions/Actions';

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

  return (
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
  );
};

export default SongList;
