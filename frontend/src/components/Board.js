import React, { Component } from 'react';
import Background from '../images/background.png';
import Fields from './Fields';
import Ball from './Ball';
import { isMobile } from 'react-device-detect';

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
  FIELD_HEIGHT,
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

    squaresInit: [],
    // squaresCoords: [],
    score: 0,
    bricks: [],
    wallCoordinates: [],
    currentFieldId: 1,
  };

  FIELDS = [];

  moveLeft() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].leftWall) {
      this.moveLeftToCurrentFieldLeftWall(x, positionX, currentFieldId, FIELDS);
    } else if (FIELDS[FIELDS[currentFieldId].leftFieldId].rightWall) {
      this.moveLeftToLeftFieldRightWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall &&
      FIELDS[FIELDS[currentFieldId].leftFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveLeftToLeftFieldBottomAndTopWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall
    ) {
      this.moveLeftToLeftFieldBottomWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveLeftToLeftFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else {
      this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
    }
  }
  moveRight() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].rightWall) {
      this.moveRightToCurrentFieldRightWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (FIELDS[FIELDS[currentFieldId].rightFieldId].leftWall) {
      this.moveRightToRightFieldLeftWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall &&
      FIELDS[FIELDS[currentFieldId].rightFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveRightToRightFieldBottomAndTopWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall
    ) {
      this.moveRightToRightFieldBottomWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveRightToRightFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else {
      this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
    }
  }
  moveUp() {
    const { y, positionY, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].topWall) {
      this.moveUpToCurrentFieldTopWall(y, positionY, currentFieldId, FIELDS);
    } else if (FIELDS[FIELDS[currentFieldId].topFieldId].bottomWall) {
      this.moveUpToTopFieldBottomWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].topFieldId].leftWall &&
      !FIELDS[currentFieldId].leftWall
    ) {
      this.moveUpToTopFieldLeftWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].topFieldId].rightWall &&
      !FIELDS[currentFieldId].rightWall
    ) {
      this.moveUpToTopFieldRightWall(y, positionY, currentFieldId, FIELDS);
    } else {
      this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
    }
  }
  moveDown() {
    let { y, positionY, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].bottomWall) {
      this.moveDownToCurrentFieldBottomWall(
        y,
        positionY,
        currentFieldId,
        FIELDS
      );
    } else if (FIELDS[FIELDS[currentFieldId].bottomFieldId].topWall) {
      this.moveDownToBottomFieldTopWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].bottomFieldId].leftWall &&
      !FIELDS[currentFieldId].leftWall
    ) {
      this.moveDownToBottomFieldLeftWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].bottomFieldId].rightWall &&
      !FIELDS[currentFieldId].rightWall
    ) {
      this.moveDownToBottomFieldRightWall(y, positionY, currentFieldId, FIELDS);
    } else {
      this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
    }
  }

  //RIGHT WALL

  moveDownToBottomFieldRightWall = (y, positionY, currentFieldId, FIELDS) => {
    const { positionX } = this.state;
    if (positionX > FIELDS[currentFieldId].left + BRICK_HEIGHT - BALL_SIZE) {
      if (
        y > SENSITIVITY &&
        positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveUpToTopFieldRightWall = (y, positionY, currentFieldId, FIELDS) => {
    const { positionX } = this.state;
    if (positionX > FIELDS[currentFieldId].left + BRICK_HEIGHT - BALL_SIZE) {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveLeftToLeftFieldRightWall = (x, positionX, currentFieldId, FIELDS) => {
    if (
      x > SENSITIVITY &&
      positionX > FIELDS[currentFieldId].left + BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  //LEFT WALL
  moveUpToTopFieldLeftWall = (y, positionY, currentFieldId, FIELDS) => {
    const { positionX } = this.state;
    if (positionX < FIELDS[currentFieldId].left + BRICK_HEIGHT + BALL_SIZE) {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveDownToBottomFieldLeftWall = (y, positionY, currentFieldId, FIELDS) => {
    const { positionX } = this.state;
    if (positionX < FIELDS[currentFieldId].left + BRICK_HEIGHT + BALL_SIZE) {
      if (
        y > SENSITIVITY &&
        positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveRightToRightFieldLeftWall = (x, positionX, currentFieldId, FIELDS) => {
    if (
      x < SENSITIVITY &&
      positionX < FIELDS[currentFieldId].left + FIELD_WIDTH - BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  //TOP AND BOTTOM WALL
  moveRightToRightFieldBottomAndTopWall = (
    x,
    positionX,
    currentFieldId,
    FIELDS
  ) => {
    const { positionY } = this.state;

    if (
      x < SENSITIVITY &&
      positionX <
        FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE / 2
    ) {
      this.moveRightToRightFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      positionY >
      FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE / 2
    ) {
      this.moveRightToRightFieldBottomWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveLeftToLeftFieldBottomAndTopWall = (
    x,
    positionX,
    currentFieldId,
    FIELDS
  ) => {
    const { positionY } = this.state;

    if (positionY < FIELDS[currentFieldId].top + BRICK_HEIGHT + BALL_SIZE / 2) {
      this.moveLeftToLeftFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      positionY >
      FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE / 2
    ) {
      this.moveLeftToLeftFieldBottomWall(x, positionX, currentFieldId, FIELDS);
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  //TOP WALL

  moveLeftToLeftFieldTopWall = (x, positionX, currentFieldId, FIELDS) => {
    const { positionY } = this.state;

    if (positionY < FIELDS[currentFieldId].top + BRICK_HEIGHT + BALL_SIZE) {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left + BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveRightToRightFieldTopWall = (x, positionX, currentFieldId, FIELDS) => {
    const { positionY } = this.state;
    if (positionY < FIELDS[currentFieldId].top + BRICK_HEIGHT + BALL_SIZE) {
      if (
        x < SENSITIVITY &&
        positionX < FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveDownToBottomFieldTopWall = (y, positionY, currentFieldId, FIELDS) => {
    if (
      y > SENSITIVITY &&
      positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  // BOTTOM WALL
  moveLeftToLeftFieldBottomWall = (x, positionX, currentFieldId, FIELDS) => {
    const { positionY } = this.state;

    if (
      positionY >
      FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE
    ) {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left + BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveRightToRightFieldBottomWall = (x, positionX, currentFieldId, FIELDS) => {
    const { positionY } = this.state;
    if (
      positionY >
      FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE
    ) {
      if (
        x < SENSITIVITY &&
        positionX < FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveUpToTopFieldBottomWall = (y, positionY, currentFieldId, FIELDS) => {
    if (y < SENSITIVITY && positionY > FIELDS[currentFieldId].top + BALL_SIZE) {
      this.changePositionY(positionY, y);
    }
  };

  // MOVE
  moveLeftToCurrentFieldLeftWall = (x, positionX, currentFieldId, FIELDS) => {
    if (
      x > SENSITIVITY &&
      positionX > FIELDS[currentFieldId].left + BRICK_HEIGHT + BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveLeftToNextField = (x, positionX, currentFieldId, FIELDS) => {
    if (x > SENSITIVITY && positionX > FIELDS[currentFieldId].left) {
      this.changePositionX(positionX, x);
    }
  };

  moveRightToNextField = (x, positionX, currentFieldId, FIELDS) => {
    if (
      x < SENSITIVITY &&
      positionX < FIELDS[currentFieldId].left + FIELD_WIDTH
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveRightToCurrentFieldRightWall = (x, positionX, currentFieldId, FIELDS) => {
    if (
      x < SENSITIVITY &&
      positionX <
        FIELDS[currentFieldId].left + FIELD_WIDTH - BRICK_HEIGHT - BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveUpToNextField = (y, positionY, currentFieldId, FIELDS) => {
    if (y < SENSITIVITY && positionY > FIELDS[currentFieldId].top) {
      this.changePositionY(positionY, y);
    }
  };

  moveUpToCurrentFieldTopWall = (y, positionY, currentFieldId, FIELDS) => {
    if (
      y < SENSITIVITY &&
      positionY > FIELDS[currentFieldId].top + BRICK_HEIGHT + BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  moveDownToNextField = (y, positionY, currentFieldId, FIELDS) => {
    if (
      y > SENSITIVITY &&
      positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT
    ) {
      this.changePositionY(positionY, y);
    }
  };

  moveDownToCurrentFieldBottomWall = (y, positionY, currentFieldId, FIELDS) => {
    if (
      y > SENSITIVITY &&
      positionY <
        FIELDS[currentFieldId].top + FIELD_HEIGHT - BRICK_HEIGHT - BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  changePositionX = (positionX, x) => {
    this.setState({
      positionX: positionX - x,
    });
  };

  changePositionY = (positionY, y) => {
    this.setState({
      positionY: positionY + y,
    });
  };

  componentDidMount() {
    console.log('cdm', this.FIELDS);
    let squares = [];

    // for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    //   let initialTop = Math.random() * (BOARD_HEIGHT - SQUARE_SIZE);
    //   let initialLeft = Math.random() * (BOARD_WIDTH - SQUARE_SIZE);
    //   let top = parseFloat(initialTop.toFixed(1));
    //   let left = parseFloat(initialLeft.toFixed(1));
    //   let bottom = parseFloat((initialTop + SQUARE_SIZE).toFixed(1));
    //   let right = parseFloat((initialLeft + SQUARE_SIZE).toFixed(1));
    //   squares.push({
    //     top,
    //     left,
    //     bottom,
    //     right,
    //     collected: false
    //   });
    // }
    const positionY = 2 * BRICK_HEIGHT;
    const positionX = 2 * BRICK_HEIGHT;

    this.setState({
      squaresInit: squares,
      positionY,
      positionX,
    });
    let accelerometer;
    // this.setSquareCoordinates();
    if (isMobile) {
      accelerometer = new window.Accelerometer({ frequency: 60 });
      accelerometer.addEventListener('reading', (e) => {
        this.setState({
          x: accelerometer.x,
          y: accelerometer.y,
          z: accelerometer.z,
        });
      });
      accelerometer.start();
      setInterval(() => {
        this.moveLeft();
        this.moveRight();
        this.moveDown();
        this.moveUp();

        this.fieldDetector();
      }, 1000 / 60);
    }
  }

  fieldDetector() {
    const { positionX, positionY } = this.state;
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

  setAllFields = (fields) => {
    this.FIELDS = fields;
  };

  render() {
    const { positionX, positionY } = this.state;
    // console.log('current field id: ', currentFieldId);
    return (
      <div
        style={{
          marginBottom: '1rem',
          backgroundImage: `url(${Background})`,

          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          position: 'relative',
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
