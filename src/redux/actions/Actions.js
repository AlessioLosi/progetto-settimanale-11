export const PLAY_SONG = 'PLAY_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const SET_SONGS = 'SET_SONGS';
export const SET_ERROR = 'SET_ERROR';
export const SET_SEARCH_QUERY='SET_SEARCH_QUERY'


export const playSong = (song) => ({
  type: PLAY_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});

export const setSongs = (songs) => ({
  type: SET_SONGS,
  payload: songs,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  

export const getSongsAction = (query) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel recupero delle canzoni');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setSongs(data.data)); 
      })
      .catch((error) => {
        dispatch(setError(error.message)); 
      });
  };
};
