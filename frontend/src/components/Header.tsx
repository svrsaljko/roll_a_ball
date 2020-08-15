import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers/index';
import { isSignedIn, signOut } from '../service/authService';

import '../css/Header.css';

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

function Header() {
  console.log('is signed in', isSignedIn());

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

      <div id="menuBar" className="header-container-menu">
        <NavLink
          exact
          to="/"
          className="header-container-element"
          activeStyle={{
            borderBottom: '2px solid darkRed',
            color: 'darkRed',
          }}
        >
          HOME
        </NavLink>
        {isSignedIn() ? (
          <NavLink
            exact
            to="/playerrank"
            className="header-container-element"
            activeStyle={{
              borderBottom: '2px solid darkRed',
              color: 'darkRed',
            }}
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
            activeStyle={{
              borderBottom: '2px solid darkRed',
              color: 'darkRed',
            }}
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
            activeStyle={{
              borderBottom: '2px solid darkRed',
              color: 'darkRed',
            }}
          >
            SIGN OUT
          </NavLink>
        )}
      </div>
    </div>
  );
}

// const mapStateToProps = (state: IRootReducer) => {
//   const color = state.levelReducer.ballColor;
//   return {
//     color,
//   };
// };

// export default connect(mapStateToProps)(Header);
export default Header;
