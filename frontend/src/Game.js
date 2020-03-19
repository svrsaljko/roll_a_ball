import React, { Component } from 'react';
import Square from './Square';
import { isMobile } from 'react-device-detect';
import Ball from './Ball';
import Background from './images/background.png';
import BrickDark from './images/brickdark.png';

const MAX_ROW_BRICKS = 9;
const MAX_COLUMN_BRICKS = 14;
const BRICK_WIDTH = 40;
const BRICK_HEIGHT = 20;
const BOARD_WIDTH = 360;
const BOARD_HEIGHT = 600;
const SQUARE_SIZE = 30;
const BALL_SIZE = 20;
const SENSITIVITY = 0.0;
const SPEED_SENSITIVITY_FACTOR1 = 1 / 3;
const SPEED_SENSITIVITY_FACTOR2 = 3 / 4;
const SPEED_SENSITIVITY_FACTOR_BORDER = 1 / 5;
const NUMBER_OF_SQUARES = 3;

export class Game extends Component {
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
    if (x > SENSITIVITY && positionX > BRICK_HEIGHT) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveRight() {
    let { x, positionX } = this.state;
    if (x < SENSITIVITY && positionX < BOARD_WIDTH - BALL_SIZE - BRICK_HEIGHT) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveUp() {
    let { y, positionY } = this.state;
    if (y < SENSITIVITY && positionY > BRICK_HEIGHT) {
      this.setState({ positionY: positionY + y / 3 });
    }
  }
  moveDown() {
    let { y, positionY } = this.state;
    if (
      y > SENSITIVITY &&
      positionY < BOARD_HEIGHT - BALL_SIZE - BRICK_HEIGHT
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
    let bricks = [];
    let wallCoordinates = [];

    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < MAX_ROW_BRICKS; i++) {
        let initialTop;
        if (j === 0) {
          initialTop = 0;
        } else if (j === 1) {
          initialTop = BOARD_HEIGHT - BRICK_HEIGHT;
          console.log(initialTop);
        }
        let initialLeft = i * BRICK_WIDTH;

        bricks.push(
          <img
            style={{
              width: `${BRICK_WIDTH}px`,
              height: `${BRICK_HEIGHT}px`,

              position: 'absolute',
              left: `${initialLeft}px`,
              top: `${initialTop}px`
            }}
            src={BrickDark}
            alt="brickDarkImg"
          />
        );

        // if (i === 0) {
        //   let right = initialLeft + MAX_ROW_BRICKS * BRICK_WIDTH;
        //   let bottom = initialTop + BRICK_HEIGHT;
        //   wallCoordinates.push({
        //     top: initialTop,
        //     left: initialLeft,
        //     right,
        //     bottom
        //   });
        // }
      }
    }

    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < MAX_COLUMN_BRICKS; i++) {
        let initialTop = BRICK_WIDTH / 2 + BRICK_HEIGHT / 2 + i * BRICK_WIDTH;
        let initialLeft;
        if (j === 0) {
          initialLeft = -BRICK_HEIGHT / 2;
        } else if (j === 1) {
          initialLeft = BOARD_WIDTH - BRICK_HEIGHT - BRICK_HEIGHT / 2;
          console.log(initialTop);
        }

        bricks.push(
          <img
            className="RotatedBrick"
            style={{
              width: `${BRICK_WIDTH}px`,
              height: `${BRICK_HEIGHT}px`,

              position: 'absolute',
              left: `${initialLeft}px`,
              top: `${initialTop}px`
            }}
            src={BrickDark}
            alt="brickDarkImg"
          />
        );

        // if (i === 0) {
        //   let right = initialLeft + MAX_ROW_BRICKS * BRICK_WIDTH;
        //   let bottom = initialTop + BRICK_HEIGHT;
        //   wallCoordinates.push({
        //     top: initialTop,
        //     left: initialLeft,
        //     right,
        //     bottom
        //   });
        // }
      }
    }

    console.log('wall coords: ', wallCoordinates);
    this.setState({ bricks });
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
    // console.log('squares: ', squares);

    this.setState({
      squaresInit: squares,
      positionY: BOARD_HEIGHT / 2 - BALL_SIZE / 2,
      positionX: BOARD_WIDTH / 2 - BALL_SIZE / 2
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
      }, 1000 / 60);
    }
  }

  // bricksDetection() {
  //   let { wallCoordinates, positionY, positionX } = this.state;
  //   let topOfBall = positionY.toFixed(1);
  //   let bottomOfBall = (positionY + BALL_SIZE).toFixed(1);
  //   let leftSideOfBall = (positionX - BALL_SIZE / 2).toFixed(1);
  //   let rightSideOfBall = (positionX + BALL_SIZE / 2).toFixed(1);

  //   for (let i = 0; i < wallCoordinates.length; i++) {
  //     // console.log('brick: ' + wallCoordinates[i].bottom);
  //     if (
  //       topOfBall <= wallCoordinates[i].bottom &&
  //       bottomOfBall >= wallCoordinates[i].top
  //       // leftSideOfBall >= bricksCoordinates[i].left ||
  //       // rightSideOfBall <= bricksCoordinates[i].right |
  //     ) {
  //       return true;
  //     } else return false;
  //   }
  // }
  collisionDetection() {
    let { squaresInit, positionY, positionX, score } = this.state;
    let topOfBall = positionY.toFixed(1);
    let bottomOfBall = (positionY + BALL_SIZE).toFixed(1);
    let leftSideOfBall = (positionX - BALL_SIZE / 2).toFixed(1);
    let rightSideOfBall = (positionX + BALL_SIZE / 2).toFixed(1);
    // console.log('topOfBall: ', topOfBall);
    // console.log('bottomOfBall: ', bottomOfBall);
    // console.log('leftSideOfBall: ', leftSideOfBall);
    // console.log('rightSideOfBall: ', rightSideOfBall);

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
    const { bricks, squaresInit, positionX, wallCoordinates } = this.state;

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
          {' '}
          {squaresInit.map(square => {
            const { top, left, collected } = square;

            if (!collected) {
              return <Square key={top} top={top} left={left} />;
            } else return <div></div>;
          })}
          <Ball
            positionX={this.state.positionX}
            positionY={this.state.positionY}
          />
          {bricks}
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

export default Game;
