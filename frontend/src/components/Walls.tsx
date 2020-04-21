import React from 'react';
import { BRICK_WIDTH, BRICK_HEIGHT } from './Constants';
import BrickDark from '../images/brickdark.png';
import RotatedBrickDark from '../images/rotatedBrickdark.png';

const drawLeftAndRightWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          left: 0,
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          top: `${BRICK_WIDTH - 10}px`,
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />

      <img
        style={{
          position: 'absolute',
          left: '20px',
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
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
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawTopAndBottomWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          width: `${BRICK_WIDTH}px`,
          height: `${BRICK_HEIGHT}px`,
          left: '0px',
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
          height: `${BRICK_HEIGHT}px`,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawBottomAndRightWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH}px`,
          left: '20px',
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
          height: `${BRICK_HEIGHT}px`,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawTopAndRightWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          width: `${BRICK_WIDTH}px`,
          height: `${BRICK_HEIGHT}px`,
          left: '0px',
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
          height: `${BRICK_WIDTH}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawBottomAndLeftWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH}px`,
          left: '0px',
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
          height: `${BRICK_HEIGHT}px`,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawTopAndLeftWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          width: `${BRICK_WIDTH}px`,
          height: `${BRICK_HEIGHT}px`,
          left: '0px',
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
          height: `${BRICK_WIDTH}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawTopWall = () => {
  return (
    <img
      style={{
        width: `${BRICK_WIDTH}px`,
        height: `${BRICK_HEIGHT}px`,
      }}
      src={BrickDark}
      alt="brickDarkImg"
    />
  );
};

const drawBottomWall = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <img
        style={{
          width: `${BRICK_WIDTH}px`,
          height: `${BRICK_HEIGHT}px`,
          position: 'absolute',
          top: `${BRICK_WIDTH}px`,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawRightWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          left: '20px',
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
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
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawLeftWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          left: 0,
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          top: `${BRICK_WIDTH - 10}px`,
          width: `${BRICK_HEIGHT}px`,
          height: `${BRICK_WIDTH - 10}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

interface IProps {
  topWall: boolean;
  leftWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
}

const drawWalls = (props: IProps) => {
  const { topWall, leftWall, bottomWall, rightWall } = props;
  if (topWall && leftWall) {
    return <div>{drawTopAndLeftWall()}</div>;
  } else if (bottomWall && rightWall) {
    return <div>{drawBottomAndRightWall()}</div>;
  } else if (bottomWall && leftWall) {
    return <div>{drawBottomAndLeftWall()}</div>;
  } else if (topWall && rightWall) {
    return <div>{drawTopAndRightWall()}</div>;
  } else if (topWall && bottomWall) {
    return <div> {drawTopAndBottomWall()} </div>;
  } else if (leftWall && rightWall) {
    return <div> {drawLeftAndRightWall()} </div>;
  } else if (topWall) {
    return <div> {drawTopWall()} </div>;
  } else if (bottomWall) {
    return <div> {drawBottomWall()} </div>;
  } else if (leftWall) {
    return <div> {drawLeftWall()} </div>;
  } else if (rightWall) {
    return <div> {drawRightWall()} </div>;
  }
};

export default function Walls(props: IProps) {
  return <div>{drawWalls(props)}</div>;
}
