const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const loginParam = {
  auth_url: process.env.REACT_APP_AUTH_URI,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  scope: scopes.join('%20'),
  response_type: 'token',
  show_dialog: true,
}

export const loginUrl = `${loginParam.auth_url}?client_id=${loginParam.client_id}&redirect_uri=${loginParam.redirect_uri}&scope=${loginParam.scope}&response_type=${loginParam.response_type}&show_dialog=${loginParam.show_dialog}`;

export const getAccessToken = () => {
  const token = window.location.hash.substring(1).split('&').reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;
  }, {});
  window.location.hash = '';

  return token;
}