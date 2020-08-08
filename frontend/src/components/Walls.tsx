import React from 'react';
import {
  VERTICAL_BRICK_S_HEIGHT,
  VERTICAL_BRICK_M_HEIGHT,
  VERTICAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/Constants';
import {
  DarkRedBall,
  IceBall,
  NeonBlueBall,
  BlackDoor,
  GoldDoor,
  IceDoor,
  Diamond,
  Emerald,
  Ruby,
  Sapphire,
  Gold,
  Silver,
  NeonGreenEnemy,
  NeonRedEnemy,
  NeonBlueEnemy,
} from '../items/Items';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';

interface IProps {
  topWall: boolean;
  leftWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
  brick: string;
  rotatedBrick: string;

  // BALL
  hasDarkRedBall: boolean;
  hasIceBall: boolean;
  hasNeonBlueBall: boolean;
  // DOOR
  hasBlackDoor: boolean;
  hasGoldDoor: boolean;
  hasIceDoor: boolean;
  // ITEMS
  hasGold: boolean;
  hasSilver: boolean;
  hasDiamond: boolean;
  hasEmerald: boolean;
  hasSapphire: boolean;
  hasRuby: boolean;
  // ENEMY
  hasNeonRedEnemy: boolean;
  hasNeonGreenEnemy: boolean;
  hasNeonBlueEnemy: boolean;
}

const drawWalls = (props: IProps) => {
  const {
    topWall,
    leftWall,
    bottomWall,
    rightWall,
    brick,
    rotatedBrick,

    // BALL
    hasDarkRedBall,
    hasIceBall,
    hasNeonBlueBall,
    // DOOR
    hasBlackDoor,
    hasGoldDoor,
    hasIceDoor,
    // ITEMS
    hasGold,
    hasSilver,
    hasDiamond,
    hasEmerald,
    hasSapphire,
    hasRuby,
    // ENEMY
    hasNeonRedEnemy,
    hasNeonGreenEnemy,
    hasNeonBlueEnemy,
  } = props;
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
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />

        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
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
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${2 * HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
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
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${VERTICAL_BRICK_M_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
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
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
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
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${VERTICAL_BRICK_M_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
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
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
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
        src={brick}
        alt="Brick1Img"
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
          src={brick}
          alt="Brick1Img"
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
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
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
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawCircleShape = (shape: JSX.Element) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: `${FIELD_HEIGHT / 4}px`,
          left: `${FIELD_WIDTH / 5}px`,
        }}
      >
        {shape}
      </div>
    );
  };
  const drawHexagonShape = (shape: JSX.Element) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: `${FIELD_HEIGHT / 3}px`,
          left: `${FIELD_WIDTH / 5}px`,
        }}
      >
        {shape}
      </div>
    );
  };
  const drawCutDiamondShape = (shape: JSX.Element) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: `${FIELD_HEIGHT / 3}px`,
          left: `${FIELD_WIDTH / 5}px`,
        }}
      >
        {shape}
      </div>
    );
  };

  const drawEnemyShape = (shape: JSX.Element) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: `${FIELD_HEIGHT * 0.45}px`,
          left: `${FIELD_WIDTH * 0.45}px`,
        }}
      >
        {shape}
      </div>
    );
  };

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
  } else if (hasDarkRedBall) {
    return <div>{drawCircleShape(DarkRedBall)}</div>;
  } else if (hasNeonBlueBall) {
    return <div>{drawCircleShape(NeonBlueBall)}</div>;
  } else if (hasIceBall) {
    return <div>{drawCircleShape(IceBall)}</div>;
  } else if (hasBlackDoor) {
    return <div>{drawCircleShape(BlackDoor)}</div>;
  } else if (hasGoldDoor) {
    return <div>{drawCircleShape(GoldDoor)}</div>;
  } else if (hasIceDoor) {
    return <div>{drawCircleShape(IceDoor)}</div>;
  } else if (hasGold) {
    return <div>{drawHexagonShape(Gold)}</div>;
  } else if (hasSilver) {
    return <div>{drawHexagonShape(Silver)}</div>;
  } else if (hasDiamond) {
    return <div>{drawCutDiamondShape(Diamond)}</div>;
  } else if (hasEmerald) {
    return <div>{drawCutDiamondShape(Emerald)}</div>;
  } else if (hasSapphire) {
    return <div>{drawCutDiamondShape(Sapphire)}</div>;
  } else if (hasRuby) {
    return <div>{drawCutDiamondShape(Ruby)}</div>;
  } else if (hasNeonRedEnemy) {
    return <div>{drawEnemyShape(NeonRedEnemy)}</div>;
  } else if (hasNeonGreenEnemy) {
    return <div>{drawEnemyShape(NeonGreenEnemy)}</div>;
  } else if (hasNeonBlueEnemy) {
    return <div>{drawEnemyShape(NeonBlueEnemy)}</div>;
  }
};

function Walls(props: IProps) {
  return <div>{drawWalls(props)}</div>;
}

const mapStateToProps = (state: IRootReducer) => {
  const { brick } = state.wallsReducer;
  const { rotatedBrick } = state.wallsReducer;

  return {
    brick,
    rotatedBrick,
  };
};

export default connect(mapStateToProps)(Walls);
