import React, { Component } from 'react';
import Square from './Square';
import { isMobile } from 'react-device-detect';

const BOARD_WIDTH = 360 - 6;
const BOARD_HEIGHT = 460;
const SQUARE_SIZE = 30;
const BORDER = 3;
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
    score: 0
  };

  moveLeft() {
    let { x, positionX } = this.state;
    if (x > SENSITIVITY && positionX > 0.5) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveRight() {
    let { x, positionX } = this.state;
    if (x < SENSITIVITY && positionX < BOARD_WIDTH - BALL_SIZE) {
      this.setState({ positionX: positionX - x / 3 });
    }
  }
  moveUp() {
    let { y, positionY } = this.state;
    if (y < SENSITIVITY && positionY > 0) {
      // console.log('moveup');
      this.setState({ positionY: positionY + y / 3 });
    }
  }
  moveDown() {
    let { y, positionY } = this.state;
    if (y > SENSITIVITY && positionY < BOARD_HEIGHT - BALL_SIZE) {
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
    // console.log('window', window);
    // console.log('is mobile: ', isMobile);

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
    console.log('squares: ', squares);

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
        // console.log('Acceleration along the X-axis ' + accelerometer.x);
        // console.log('Acceleration along the Y-axis ' + accelerometer.y);
        // console.log('Acceleration along the Z-axis ' + accelerometer.z);
      });
      accelerometer.start();
      setInterval(() => {
        // console.log('update 60 times in second');
        this.moveLeft();
        this.moveRight();
        this.moveDown();
        this.moveUp();
        this.collisionDetection();
        // this.update();
        // this.draw();
      }, 1000 / 60);
      //   console.log('accelerometer: ', accelerometer);
    }
  }

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
          console.log('collision');
          console.log('squares: ', squaresInit);
          console.log('topOfBall: ', topOfBall);
          console.log('bottomOfBall: ', bottomOfBall);
          console.log('leftSideOfBall: ', leftSideOfBall);
          console.log('rightSideOfBall: ', rightSideOfBall);
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
    // console.log('this.state.squaresInit', this.state.squaresInit);
    // this.state.squaresInit(square => {});
  }
  render() {
    const { squaresInit, positionX } = this.state;

    // console.log('squares: ', this.state.squaresInit);
    // console.log('positionX: ', positionX);
    return (
      <div>
        <div
          style={{
            border: '3px solid red',
            marginBottom: '1rem',
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
          <div
            className="ball"
            style={{
              width: `${BALL_SIZE}px`,
              height: `${BALL_SIZE}px`,
              background: 'black',
              borderRadius: '50%',
              position: 'absolute',
              top: `${this.state.positionY}px`,
              left: `${this.state.positionX}px`
            }}
          ></div>
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
