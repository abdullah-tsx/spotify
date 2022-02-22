import React from 'react';
import './Login.scss';
import {loginUrl} from "../../utils/spotify";

const Login = () => {
  return (
    <div className="login">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
           alt="spotify-logo"/>
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;