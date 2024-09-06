import React from 'react';

const SongCard = ({ song, onPlay, onLike, isLiked }) => {
  return (
    <div className="song-card">
      <img src={song.album.cover_medium} alt={song.title} />
      <h5>{song.title}</h5>
      <p>{song.artist.name}</p>
      <button onClick={() => onPlay(song)}>Play</button>
      <button onClick={() => onLike(song.id)}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default SongCard;

