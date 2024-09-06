
import React from 'react';

const SongCard = ({ song, onPlay, onLike, isLiked }) => {
  return (
    <div className="song-card">
      <img src={song.album.cover} alt={song.title} className="song-card__image" />
      <div className="song-card__info">
        <h3 className="song-card__title">{song.title}</h3>
        <p className="song-card__artist">{song.artist.name}</p>
        <button onClick={() => onPlay(song)} className="song-card__button">Play</button>
        <button onClick={() => onLike(song.id)} className="song-card__button">
          {isLiked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default SongCard;