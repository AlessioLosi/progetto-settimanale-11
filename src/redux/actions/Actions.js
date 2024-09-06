export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  payload: songs,
});

export const playSong = (song) => ({
  type: 'PLAY_SONG',
  payload: song,
});

export const toggleLike = (songId) => ({
  type: 'TOGGLE_LIKE',
  payload: songId,
});
