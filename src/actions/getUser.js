import spotify from '../helpers/spotifyHelper';

export const getUser = async () => {
  try {
    return await spotify.getMe();
  } catch (e) {

  }
}