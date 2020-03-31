import React, { Component } from 'react';
import Background from '../images/background.png';
import Fields from './Fields';
import Ball from './Ball';
import { isMobile } from 'react-device-detect';
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

class Board extends Component {
  state = {
    // gameWidth: GAME_WIDTH,
    // gameHeight: GAME_HEIGHT,
    x: 0,
    y: 0,
    z: 0,
    positionX: 0,
    positionY: 0,
    topOfBall: 0,
    bottomOfBall: 0,
    rightOfBall: 0,
    leftOfBall: 0,
    squaresInit: [],
    // squaresCoords: [],
    score: 0,
    bricks: [],
    wallCoordinates: [],
    currentFieldId: 1
  };

  FIELDS = [];

  moveLeft() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].leftWall) {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left + BRICK_HEIGHT + BALL_SIZE
      ) {
        this.setState({ positionX: positionX - x, leftOfBall: positionX - x });
      }
    } else {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left
        // &&
        // this.wallsDetection('left')
      ) {
        this.setState({ positionX: positionX - x, leftOfBall: positionX - x });
      }
    }
  }
  moveRight() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].rightWall) {
      if (
        x < SENSITIVITY &&
        positionX <
          FIELDS[currentFieldId].left + FIELD_WIDTH - BRICK_HEIGHT - BALL_SIZE
        //  &&
        // this.wallsDetection('right')
      ) {
        this.setState({
          positionX: positionX - x,
          rightOfBall: positionX - x + BALL_SIZE
        });
      }
    } else {
      if (
        x < SENSITIVITY &&
        positionX < FIELDS[currentFieldId].left + FIELD_WIDTH
        //  &&
        // this.wallsDetection('right')
      ) {
        this.setState({
          positionX: positionX - x,
          rightOfBall: positionX - x + BALL_SIZE
        });
      }
    }
  }
  moveUp() {
    const { y, positionY, positionX, currentFieldId, topOfBall } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].topWall) {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BRICK_HEIGHT + BALL_SIZE
        // &&
        // this.wallsDetection('up')
      ) {
        this.setState({
          topOfBall: positionY + y,
          positionY: positionY + y
        });
      }
    } else if (FIELDS[FIELDS[currentFieldId].topFieldId].bottomWall) {
      // console.log('ima bottom wall');
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BALL_SIZE / 2
      ) {
        this.setState({
          positionY: positionY + y * 0.65,
          topOfBall: positionY + y
        });
      }
    } else {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top
        // &&
        // this.wallsDetection('up')
      ) {
        this.setState({
          positionY: positionY + y,
          topOfBall: positionY + y
        });
      }
    }
  }
  moveDown() {
    let { y, positionY, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].bottomWall) {
      if (
        y > SENSITIVITY &&
        positionY <
          FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE
      ) {
        this.setState({
          positionY: positionY + y,
          bottomOfBall: positionY + y + BALL_SIZE
        });
      }
    } else {
      if (
        y > SENSITIVITY &&
        positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT
      ) {
        this.setState({
          positionY: positionY + y,
          bottomOfBall: positionY + y + BALL_SIZE
        });
      }
    }
  }

  componentDidMount() {
    console.log('cdm', this.FIELDS);
    let squares = [];

    for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
      let initialTop = Math.random() * (BOARD_HEIGHT - SQUARE_SIZE);
      let initialLeft = Math.random() * (BOARD_WIDTH - SQUARE_SIZE);
      let top = parseFloat(initialTop.toFixed(1));
      let left = parseFloat(initialLeft.toFixed(1));
      let bottom = parseFloat((initialTop + SQUARE_SIZE).toFixed(1));
      let right = parseFloat((initialLeft + SQUARE_SIZE).toFixed(1));
      squares.push({
        top,
        left,
        bottom,
        right,
        collected: false
      });
    }
    const positionY = 2 * BRICK_HEIGHT;
    const positionX = 2 * BRICK_HEIGHT;
    const topOfBall = positionY;
    const bottomOfBall = positionY + BALL_SIZE;
    const rightOfBall = positionX + BALL_SIZE;
    const leftOfBall = positionX;
    this.setState({
      squaresInit: squares,
      positionY,
      positionX,
      topOfBall,
      bottomOfBall,
      rightOfBall,
      leftOfBall
    });
    let accelerometer;
    // this.setSquareCoordinates();
    if (isMobile) {
      accelerometer = new window.Accelerometer({ frequency: 60 });
      accelerometer.addEventListener('reading', e => {
        this.setState({
          x: accelerometer.x,
          y: accelerometer.y,
          z: accelerometer.z
        });
      });
      accelerometer.start();
      setInterval(() => {
        this.moveLeft();
        this.moveRight();
        this.moveDown();
        this.moveUp();
        this.fieldDetector();
        // this.collisionDetection();
        // this.wallsDetection();
      }, 1000 / 60);
    }
  }

  fieldDetector() {
    const {
      positionX,
      positionY,
      topOfBall,
      bottomOfBall,
      leftOfBall,
      rightOfBall,
      x,
      y
    } = this.state;
    const { FIELDS } = this;

    for (let i = 0; i < FIELDS.length; i++) {
      if (
        positionY > FIELDS[i].top &&
        positionY < FIELDS[i].top + FIELD_HEIGHT &&
        positionX > FIELDS[i].left &&
        positionX < FIELDS[i].left + FIELD_WIDTH
      ) {
        this.setState({ currentFieldId: FIELDS[i].fieldId });
      }
    }
  }

  setAllFields = fields => {
    this.FIELDS = fields;
  };

  render() {
    const {
      positionX,
      positionY,
      currentFieldId,
      topOfBall,
      bottomOfBall,
      rightOfBall,
      leftOfBall
    } = this.state;
    console.log('current field id: ', currentFieldId);
    return (
      <div
        style={{
          marginBottom: '1rem',
          backgroundImage: `url(${Background})`,

          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          position: 'relative'
        }}
        className="board"
      >
        <Fields setAllFields={this.setAllFields} />
        <Ball positionX={positionX} positionY={positionY} />
      </div>
    );
  }
}

export default Board;
