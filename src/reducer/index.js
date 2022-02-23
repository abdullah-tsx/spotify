export const initialState = {
  token: process.env.REACT_APP_TOKEN, //set to null after dev
  user: null,
  playlists: [],
  playing: false,
  item: null
}

const reducer = (state, action) => {
  console.log('action from reducer', action);

  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    case 'SET_PLAYLISTS':
      return {...state, playlists: action.payload};
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}

export default reducer;