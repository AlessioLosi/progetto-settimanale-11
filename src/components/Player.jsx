import React from 'react';
import { useSelector } from 'react-redux';

const MusicPlayer = () => {
  const currentSong = useSelector(state => state.songs.currentSong);

  return (
    <div className="music-player">
      {currentSong ? (
        <>
          <img src={currentSong.album.cover_medium} alt={currentSong.title} />
          <h5>{currentSong.title}</h5>
          <p>{currentSong.artist.name}</p>
        </>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};

export default MusicPlayer;
