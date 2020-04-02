import React, { Component } from 'react';
import {
  MAX_ROW_BRICKS,
  MAX_COLUMN_BRICKS,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  FIELD_HEIGHT
} from './Constants';
import BrickDark from '../images/brickdark.png';
import RotatedBrickDark from '../images/rotatedBrickdark.png';

class Walls extends Component {
  componentDidMount() {
    // console.log('this.props.', this.props.topWall);
  }

  drawTopAndBottomWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`,
            left: '0px'
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '0px',
            top: `${BRICK_WIDTH}px`,
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawBottomAndRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH}px`,
            left: '20px'
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '0px',
            top: `${BRICK_WIDTH}px`,
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawTopAndRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`,
            left: '0px'
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawBottomAndLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH}px`,
            left: '0px'
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '0px',
            top: `${BRICK_WIDTH}px`,
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawTopAndLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`,
            left: '0px'
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '0px',
            top: '20px',
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawTopWall = () => {
    return (
      <img
        style={{
          width: `${BRICK_WIDTH}px`,
          height: `${BRICK_HEIGHT}px`
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
    );
  };

  drawBottomWall = () => {
    return (
      <div
        style={{
          position: 'relative'
        }}
      >
        <img
          style={{
            width: `${BRICK_WIDTH}px`,
            height: `${BRICK_HEIGHT}px`,
            position: 'absolute',
            top: `${BRICK_WIDTH}px`
          }}
          src={BrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: '20px',
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH - 10}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            left: '20px',
            top: `${BRICK_WIDTH - 10}px`,
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH - 10}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: 0,
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH - 10}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
        <img
          style={{
            position: 'absolute',
            top: `${BRICK_WIDTH - 10}px`,
            width: `${BRICK_HEIGHT}px`,
            height: `${BRICK_WIDTH - 10}px`
          }}
          src={RotatedBrickDark}
          alt="brickDarkImg"
        />
      </div>
    );
  };

  drawWalls = () => {
    const { topWall, leftWall, bottomWall, rightWall } = this.props;
    if (topWall && leftWall) {
      return <div>{this.drawTopAndLeftWall()}</div>;
    } else if (bottomWall && rightWall) {
      return <div>{this.drawBottomAndRightWall()}</div>;
    } else if (bottomWall && leftWall) {
      return <div>{this.drawBottomAndLeftWall()}</div>;
    } else if (topWall && rightWall) {
      return <div>{this.drawTopAndRightWall()}</div>;
    } else if (topWall && bottomWall) {
      return <div> {this.drawTopAndBottomWall()} </div>;
    } else if (topWall) {
      return <div> {this.drawTopWall()} </div>;
    } else if (bottomWall) {
      return <div> {this.drawBottomWall()} </div>;
    } else if (leftWall) {
      return <div> {this.drawLeftWall()} </div>;
    } else if (rightWall) {
      return <div> {this.drawRightWall()} </div>;
    }
  };

  render() {
    return <div>{this.drawWalls()}</div>;
  }
}

export default Walls;
