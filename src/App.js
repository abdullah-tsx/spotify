import React, {useContext, useEffect} from 'react';
import './App.scss';
import Login from "./components/login/Login";
import {getAccessToken} from "./utils/spotify";
import {getUser, setAccessToken} from "./actions";
import Player from "./components/player/Player";
import AppContext from "./context/app-context";

const App = () => {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {

    const hash = getAccessToken();
    const _token = hash.access_token;
    (async () => {
      if (_token) {
        dispatch({type: 'SET_TOKEN', payload: _token});
        setAccessToken(_token);
        const user = await getUser()
        dispatch({type: 'SET_USER', payload: user});
      }
    })();


  }, [dispatch])
  return (
    <div className="app">

      {state.token && <Player/>}
      {!state.token && <Login/>}
    </div>
  );
};

export default App;