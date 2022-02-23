import React from 'react';
import './Footer.scss';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import {Slider} from "@mui/material";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src="https://i.pinimg.com/564x/8c/18/cd/8c18cd6000bde8a60b8e0680bca27edf.jpg" alt="Album Cover"
             className="albumArt"/>
        <div className="songInfo">
          <h4 className="songName">Song Name</h4>
          <p className="artist">Artist</p>
        </div>
      </div>
      <div className="center">
        <div className="controls">
          <ShuffleIcon className="icon"/>
          <SkipPreviousIcon className="icon"/>
          <PlayCircleFilledIcon fontSize="large" className="icon play"/>
          <SkipNextIcon className="icon"/>
          <RepeatIcon className="icon"/>
        </div>
      </div>
      <div className="right">
        <div className="container">
          <PlaylistPlayIcon className="icon"/>
          <VolumeDownIcon className="icon"/>
          <Slider aria-labelledby="continuous-slider" value={50}/>
          <VolumeUpIcon className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;