import React from 'react';
import './SideBarOption.scss';

const SideBarOption = ({Icon, title}) => {
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="icon"/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOption;