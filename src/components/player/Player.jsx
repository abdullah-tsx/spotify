import React from 'react';
import './Player.scss';
import SideBar from "../sidebar/SideBar";
import Body from "../body/Body";
import Footer from "../footer/Footer";

const Player = () => {
  return (
    <div className="player">
      <div className="container">
        <SideBar/>
        <Body/>
      </div>
      <Footer/>
    </div>

  );
};

export default Player;