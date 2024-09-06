const initialState = {
  list: [], 
  currentSong: null, 
  likedSongs: [], 
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return {
        ...state,
        list: action.payload,
      };
    case 'PLAY_SONG':
      return {
        ...state,
        currentSong: action.payload,
      };
    case 'TOGGLE_LIKE':
      const isLiked = state.likedSongs.includes(action.payload);
      return {
        ...state,
        likedSongs: isLiked
          ? state.likedSongs.filter(songId => songId !== action.payload)
          : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default songsReducer;

