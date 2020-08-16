import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { isSignedIn, signOut } from '../service/authService';
import { isMobile } from 'react-device-detect';

import '../css/Header.css';

const onMenuClick = () => {
  let menuBar = document.getElementById('menuBar');

  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
    menuBar.style.flexDirection = 'column';
  } else {
    menuBar.style.display = 'none';
  }
};

const activeStyle = {
  borderBottom: '3px solid darkRed',
  color: 'darkRed',
};

function Header() {
  return (
    <div className="header-container">
      <div className="header-container-title-menu-button">
        <div className="header-container-title">
          R{' '}
          <div
            style={{ backgroundColor: 'darkRed' }}
            className="header-container-element-ball"
          >
            {' '}
          </div>
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

      <div
        id="menuBar"
        className="header-container-menu"
        style={{ display: ` ${isMobile ? 'none' : 'flex'}` }}
      >
        <NavLink
          exact
          to="/"
          className="header-container-element"
          activeStyle={activeStyle}
        >
          HOME
        </NavLink>
        {isSignedIn() ? (
          <NavLink
            exact
            to="/playerrank"
            className="header-container-element"
            activeStyle={activeStyle}
          >
            PLAYER RANK
          </NavLink>
        ) : (
          <div></div>
        )}
        {!isSignedIn() ? (
          <NavLink
            exact
            to="/signin"
            className="header-container-element"
            activeStyle={activeStyle}
          >
            SIGN IN
          </NavLink>
        ) : (
          <NavLink
            onClick={() => {
              signOut();
            }}
            exact
            to="signin/"
            className="header-container-element"
            activeStyle={activeStyle}
          >
            SIGN OUT
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
