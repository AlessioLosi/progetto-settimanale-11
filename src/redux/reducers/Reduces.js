import { PLAY_SONG, TOGGLE_LIKE, SET_SONGS, SET_ERROR} from '../actions/Actions';

const initialState = {
  list: [],
  currentSong: null,
  likedSongs: [],
  error: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case TOGGLE_LIKE:
      const songId = action.payload;
      return {
        ...state,
        likedSongs: state.likedSongs.includes(songId)
          ? state.likedSongs.filter(id => id !== songId)
          : [...state.likedSongs, songId],
      };
    case SET_SONGS:
      return {
        ...state,
        list: action.payload,
        error: null, 
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;


