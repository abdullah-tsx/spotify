export const initialState = {
  token: null,
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
    default:
      return state;
  }
}

export default reducer;