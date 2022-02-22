import spotify from '../helpers/spotifyHelper';

export const setAccessToken = (token) => {
  spotify.setAccessToken(token);
}