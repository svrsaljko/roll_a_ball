import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../css/Header.css';
// import { BALL_SIZE, BOARD_WIDTH } from './Constants';

const onMenuClick = () => {
  console.log('menu is clicked');

  let menuBar = document.getElementById('menuBar');

  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
    menuBar.style.flexDirection = 'column';
  } else {
    menuBar.style.display = 'none';
  }
};

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container-title-menu-button">
        <div className="header-container-title">
          R <div className="header-container-element-ball"> </div>
          LL A BALL
        </div>
        <div
          onClick={() => {
            onMenuClick();
          }}
          className="header-container-menu-button"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>

      <div id="menuBar" className="header-container-menu">
        <div className="header-container-element">HOME</div>
        <div className="header-container-element">SIGN IN</div>
        <div className="header-container-element">MENU</div>
        <div className="header-container-element">MENU</div>
      </div>
    </div>
  );
}
