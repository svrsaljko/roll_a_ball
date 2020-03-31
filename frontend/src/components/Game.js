import React, { Component } from 'react';
import Square from './Square';
import Walls from './Walls';
import Board from './Board';
import Hole from './Hole';
import { isMobile } from 'react-device-detect';
import Ball from './Ball';
import BrickDark from '../images/brickdark.png';
import { connect } from 'react-redux';
import {
  MAX_ROW_BRICKS,
  MAX_COLUMN_BRICKS,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  SQUARE_SIZE,
  BALL_SIZE,
  SENSITIVITY,
  SPEED_SENSITIVITY_FACTOR1,
  SPEED_SENSITIVITY_FACTOR2,
  SPEED_SENSITIVITY_FACTOR_BORDER,
  NUMBER_OF_SQUARES,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  FIELD_WIDTH,
  FIELD_HEIGHT
} from './Constants';

class Game extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default Game;
