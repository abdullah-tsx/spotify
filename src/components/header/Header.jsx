import React, {useContext, useState} from 'react';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AppContext from "../../context/app-context";

const Header = () => {

  const [{user}, dispatch] = useContext(AppContext);

  const [anchorElem, setAnchorElem] = useState(null);

  const open = Boolean(anchorElem);

  const onClickUser = (event) => {
    console.log(event);
    setAnchorElem(event.currentTarget);
  }

  const onLogout = (event) => {
    setAnchorElem(null);
    dispatch({type: 'RESET_ALL'})
  }

  return (
    <div className="header">
      <div className="left">
        <SearchIcon className="icon"/>
        <input type="text" placeholder="Search for Artists, Songs, or Podcasts"/>
      </div>
      <div className="right" onClick={onClickUser}>
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}/>
        <h4 className="name">{user?.display_name}</h4>
        <ArrowDropDownIcon/>
      </div>
      <Menu open={open} anchorEl={anchorElem} sx={{mt: 1.5}} onClose={() => {
        setAnchorElem(null)
      }}>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;