import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers/index';

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

interface IProps {
  color: string;
}

function Header(props: IProps) {
  const { color } = props;
  return (
    <div className="header-container">
      <div className="header-container-title-menu-button">
        <div className="header-container-title">
          R{' '}
          <div
            style={{ backgroundColor: color }}
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
          activeClassName="header-container-element"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          className="header-container-element"
        >
          HOME
        </NavLink>
        <NavLink exact to="/signin" className="header-container-element">
          SIGN IN
        </NavLink>
        <NavLink
          exact
          to="/levelgenerator"
          className="header-container-element"
        >
          LEVEL GENERATOR
        </NavLink>
        <div className="header-container-element">MENU</div>
        <div className="header-container-element">MENU</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const color = state.levelReducer.ballColor;
  return {
    color,
  };
};

export default connect(mapStateToProps)(Header);
