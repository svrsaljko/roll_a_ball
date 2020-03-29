import React, { Component } from 'react';
import Square from './Square';
import Walls from './Walls';
import Hole from './Hole';
import { isMobile } from 'react-device-detect';
import Ball from './Ball';
import Background from '../images/background.png';
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
    wallCoordinates: []
  };

  moveLeft() {
    let { x, positionX } = this.state;
    if (
      x > SENSITIVITY &&
      positionX > BRICK_HEIGHT
      // &&
      // this.wallsDetection('left')
    ) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveRight() {
    let { x, positionX } = this.state;
    if (
      x < SENSITIVITY &&
      positionX < BOARD_WIDTH - BALL_SIZE - BRICK_HEIGHT
      //  &&
      // this.wallsDetection('right')
    ) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveUp() {
    let { y, positionY } = this.state;

    if (
      y < SENSITIVITY &&
      positionY > BRICK_HEIGHT
      // &&
      // this.wallsDetection('up')
    ) {
      this.setState({ positionY: positionY + y / 3 });
    }
  }
  moveDown() {
    let { y, positionY } = this.state;
    if (
      y > SENSITIVITY &&
      positionY < BOARD_HEIGHT - BALL_SIZE - BRICK_HEIGHT
      //  && this.wallsDetection('down')
    ) {
      this.setState({ positionY: positionY + y / 3 });
    }
  }

  // setSquareCoordinates = () => {
  //   this.setState({
  //     squaresCoords: this.state.squaresInit.map(square => {
  //       let { top, bottom, right, left } = square;
  //       square.bottom = top - SQUARE_SIZE;
  //       square.right = left - SQUARE_SIZE;
  //       return square;
  //     })
  //   });
  // };

  componentDidMount() {
    // this.initializeBricks();

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

    this.setState({
      squaresInit: squares,
      positionY: 2 * BRICK_HEIGHT,
      positionX: 2 * BRICK_HEIGHT
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
        this.collisionDetection();
        // this.wallsDetection();
      }, 1000 / 60);
    }
  }

  // wallsDetection(movingDirection) {
  //   let { wallCoordinates, positionY, positionX } = this.state;
  //   let topOfBall = positionY.toFixed(1);

  //   let bottomOfBall = (positionY + BALL_SIZE).toFixed(1);
  //   let leftSideOfBall = (positionX - BALL_SIZE / 2).toFixed(1);
  //   let rightSideOfBall = (positionX + BALL_SIZE / 2).toFixed(1);
  //   // let ball = [topOfBall, bottomOfBall, leftSideOfBall, rightSideOfBall];
  //   // for (let i = 0; i < wallCoordinates.length; i++) {
  //   let {
  //     leftSideOfWall,
  //     rightSideOfWall,
  //     topSideOfWall,
  //     bottomSideOfWall
  //   } = wallCoordinates[0];

  //   switch (movingDirection) {
  //     case 'up':
  //       if (topOfBall <= bottomSideOfWall || bottomOfBall >= topSideOfWall) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case 'down':
  //       if (bottomOfBall >= topSideOfWall) {
  //         return true;
  //       } else {
  //         return false;
  //       }

  //     case 'left':
  //       if (leftSideOfBall <= rightSideOfWall) {
  //         return true;
  //       } else {
  //         return false;
  //       }

  //     case 'right':
  //       if (rightSideOfBall >= leftSideOfWall) {
  //         return true;
  //       } else {
  //         return false;
  //       }

  //     default:
  //       return true;
  //   }
  // }
  collisionDetection() {
    let { squaresInit, positionY, positionX, score } = this.state;
    let topOfBall = positionY.toFixed(1);
    let bottomOfBall = (positionY + BALL_SIZE).toFixed(1);
    let leftSideOfBall = (positionX - BALL_SIZE / 2).toFixed(1);
    let rightSideOfBall = (positionX + BALL_SIZE / 2).toFixed(1);

    for (let i = 0; i < squaresInit.length; i++) {
      if (squaresInit[i].collected !== true) {
        if (
          topOfBall <= squaresInit[i].bottom &&
          bottomOfBall >= squaresInit[i].top &&
          leftSideOfBall >= squaresInit[i].left &&
          rightSideOfBall <= squaresInit[i].right
        ) {
          let j = 0;
          score++;
          let squaresInit1 = squaresInit.map(square => {
            if (i === j) {
              square.collected = true;
            }
            j++;
            return square;
          });

          this.setState({
            squaresInit: squaresInit1,
            score
          });
        }
      }
    }
  }
  render() {
    const {
      bricks,
      squaresInit,
      positionX,
      wallCoordinates,
      fields
    } = this.state;
    return (
      <div>
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
          {/* {squaresInit.map(square => {
            const { top, left, collected } = square;

            if (!collected) {
              return <Square key={top} top={top} left={left} />;
            } else return <div></div>;
          })} */}
          <Ball
            positionX={this.state.positionX}
            positionY={this.state.positionY}
          />
          <Hole />
          <Walls />
        </div>
        <div style={{ marginBottom: '1rem' }} className="score">
          Score : {this.state.score}
        </div>
        <div style={{ border: '3px solid black' }} className="accelerometer">
          <p>X: {this.state.x}</p>
          <p>Y: {this.state.y}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Game);
