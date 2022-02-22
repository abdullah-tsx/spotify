export const initialState = {
  token: 'BQBj-S_bL2oNF-Rc4VJjjv_teTeyN7zSPziWrFXeMtbXm3l3ih…PE1K8F_0wftQGVVAQqJrmuORAiF4Za3rieR0JUfEwZcm-HL2M',
  user: null,
  playlists: [],
  playing: false,
  item: null
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
}

export default reducer;