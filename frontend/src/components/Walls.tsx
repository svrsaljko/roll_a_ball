import React from 'react';
import {
  VERTICAL_BRICK_S_HEIGHT,
  VERTICAL_BRICK_M_HEIGHT,
  VERTICAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
} from './Constants';
import BrickDark from '../images/brickdark.png';
import RotatedBrickDark from '../images/rotatedBrickdark.png';
import Hole from './Hole';

const drawLeftAndRightWall = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          left: 0,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          top: `${VERTICAL_BRICK_S_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />

      <img
        style={{
          position: 'absolute',
          left: `${VERTICAL_BRICK_WIDTH}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: `${VERTICAL_BRICK_WIDTH}px`,
          top: `${VERTICAL_BRICK_S_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
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
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          left: 0,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: 0,
          top: `${2 * HORIZONTAL_BRICK_HEIGHT}px`,
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
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
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          left: `${VERTICAL_BRICK_WIDTH}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: 0,
          top: `${VERTICAL_BRICK_M_HEIGHT}px`,
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
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
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          left: 0,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: `${VERTICAL_BRICK_WIDTH}px`,
          top: `${HORIZONTAL_BRICK_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_M_HEIGHT}px`,
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
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          left: 0,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: 0,
          top: `${VERTICAL_BRICK_M_HEIGHT}px`,
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
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
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          left: 0,
        }}
        src={BrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: 0,
          top: `${HORIZONTAL_BRICK_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_M_HEIGHT}px`,
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
        width: `${HORIZONTAL_BRICK_WIDTH}px`,
        height: `${HORIZONTAL_BRICK_HEIGHT}px`,
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
          position: 'absolute',
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          top: `${2 * HORIZONTAL_BRICK_HEIGHT}px`,
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
          left: `${VERTICAL_BRICK_WIDTH}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          left: `${VERTICAL_BRICK_WIDTH}px`,
          top: `${VERTICAL_BRICK_S_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
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
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
      <img
        style={{
          position: 'absolute',
          top: `${VERTICAL_BRICK_S_HEIGHT}px`,
          width: `${VERTICAL_BRICK_WIDTH}px`,
          height: `${VERTICAL_BRICK_S_HEIGHT}px`,
        }}
        src={RotatedBrickDark}
        alt="brickDarkImg"
      />
    </div>
  );
};

const drawHole = () => {
  return <Hole />;
};

interface IProps {
  topWall: boolean;
  leftWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
  hasHole: boolean;
}

const drawWalls = (props: IProps) => {
  const { topWall, leftWall, bottomWall, rightWall, hasHole } = props;
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
  } else if (hasHole) {
    return <div> {drawHole()} </div>;
  }
};

export default function Walls(props: IProps) {
  return <div>{drawWalls(props)}</div>;
}
