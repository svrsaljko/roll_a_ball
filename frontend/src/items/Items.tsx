import React from 'react';
import '../css/items.css';
import { BALL_SIZE } from '../components/Constants';

// DRAW FUNCTIONS

const createDiamondCutShape = (color: string) => {
  return (
    <div
      style={{
        position: 'absolute',
      }}
    >
      <div
        style={{
          borderWidth: `0 ${BALL_SIZE / 2}px ${BALL_SIZE / 2}px ${
            BALL_SIZE / 2
          }px`,
          borderColor: `transparent transparent ${color} transparent`,
          width: `${BALL_SIZE}px`,
        }}
        className="diamond"
      ></div>
      <div
        style={{
          borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
          borderColor: `${color} transparent transparent transparent`,
        }}
        className="diamond-after"
      ></div>
    </div>
  );
};

const createHexagonShape = (color: string) => {
  return <div className={color}></div>;
};

const createCircleShape = (color: string, className: string) => {
  return (
    <div
      className={className}
      style={{
        height: `2rem`,
        width: `2rem`,
        backgroundColor: `${color}`,
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></div>
  );
};

const createEnemy = (color: string) => {
  return (
    <div
      style={{
        boxShadow: `0 0 0 0.2rem ${color}, 0 0.2rem 0 0.2rem ${color},-0.5rem 0.3rem 0 0.1rem ${color}, 0.5rem 0.3rem 0 0.1rem ${color},-0.6rem -0.6rem 0 0 ${color}, 0.6em -0.6rem 0 0 ${color}, -0.4rem -0.4rem 0 0 ${color},0.4rem -0.4rem 0 0 ${color}, -0.6rem -0.2rem 0 0 ${color}, -0.4rem -0.2rem 0 0 ${color},0.4rem -0.2rem 0 0 ${color}, 0.6rem -0.2rem 0 0 ${color}, -0.8rem 0 0 0 ${color},-0.6rem 0 0 0 ${color}, 0.6rem 0 0 0 ${color}, 0.8rem 0 0 0 ${color}, -1rem 0.2rem 0 0 ${color},-0.8rem 0.2rem 0 0 ${color}, 0.8rem 0.2rem 0 0 ${color}, 1rem 0.2rem 0 0 ${color},-1rem 0.4rem 0 0 ${color}, 1rem 0.4rem 0 0 ${color}, -1rem 0.6rem 0 0 ${color},-0.6rem 0.6rem 0 0 ${color}, 0.6rem 0.6rem 0 0 ${color}, 1rem 0.6rem 0 0 ${color},-0.4rem 0.8rem 0 0 ${color}, -0.2rem 0.8rem 0 0 ${color}, 0.2rem 0.8rem 0 0 ${color},0.4rem 0.8rem 0 0 ${color}`,
        background: `${color}`,
        width: ' 0.2rem',
        height: '0.2rem',
        overflow: 'hidden',
      }}
    ></div>
  );
};

//

// BALLS

const DarkRedBall = createCircleShape('darkRed', 'dark-red-ball');
const IceBall = createCircleShape('#dcf3ff', 'ice-ball');
const NeonBlueBall = createCircleShape('#1b03a3', 'neon-blue-ball');
export const BALL = [
  {
    title: 'DarkRedBall',
    ballColor: 'darkRed',
    ballSpeedCoefficient: 0.8,
  },
  {
    title: 'NeonBlueBall',
    ballColor: '#1b03a3',
    ballSpeedCoefficient: 1.1,
  },
  {
    title: 'IceBall',
    ballColor: '#dcf3ff',
    ballSpeedCoefficient: 1,
  },
];

//

// DOOR

const BlackDoor = createCircleShape('green', 'black-door');
const GoldDoor = createCircleShape('#ffd700', 'gold-door');
const IceDoor = createCircleShape('#396d7c', 'ice-door');

export const DOORS = [BlackDoor, GoldDoor, IceDoor];
//

// ITEMS

const Gold = createHexagonShape('gold');
const Silver = createHexagonShape('silver');
const Diamond = createDiamondCutShape('#b9f2ff');
const Emerald = createDiamondCutShape('#50c878');
const Ruby = createDiamondCutShape('#e0115f');
const Sapphire = createDiamondCutShape('#0f52ba');

export const ITEMS = [
  {
    title: 'Emerald',
    item: Emerald,
    points: 50000,
  },
  {
    title: 'Sapphire',
    item: Sapphire,
    points: 40000,
  },
  {
    title: 'Ruby',
    item: Ruby,
    points: 30000,
  },
  {
    title: 'Diamond',
    item: Diamond,
    points: 20000,
  },
  {
    title: 'Gold',
    item: Gold,
    points: 10000,
  },
  {
    title: 'Silver',
    item: Silver,
    points: 2000,
  },
];

//

// ENEMY
const NeonGreenEnemy = createEnemy('#39ff14');
const NeonRedEnemy = createEnemy('#b92e34');
const NeonBlueEnemy = createEnemy('#1b03a3');

export const ENEMIES = [NeonRedEnemy, NeonGreenEnemy, NeonBlueEnemy];

//
export {
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
};
