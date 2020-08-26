import Background1 from './background1.png';
import Background2 from './background2.png';
import Background3 from './background3.png';
import Background4 from './background4.png';
import Background5 from './background5.jpg';
import Background6 from './background6.gif';
import Background7 from './background7.jpg';
import Brick1 from './brick1.png';
import Brick2 from './brick2.png';
import Brick3 from './brick3.png';
import Brick4 from './brick4.jpg';
import Brick5 from './brick5.jpg';
import Brick6 from './brick6.jpg';
import Brick7 from './brick7.jpg';
import Brick8 from './brick8.jpg';
import RotatedBrick1 from './rotatedBrick1.png';
import RotatedBrick2 from './rotatedBrick2.png';
import RotatedBrick3 from './brick3.png';
import RotatedBrick4 from './brick4.jpg';
import RotatedBrick5 from './brick5.jpg';
import RotatedBrick6 from './brick6.jpg';
import RotatedBrick7 from './brick7.jpg';
import RotatedBrick8 from './brick8.jpg';

import TRexNoConnection from './no-connection-t-rex.png';

import Level1Animation from './level1.gif';
import Level3Animation from './level3.gif';
import Level1Screen from './level1.png';
import Level2Screen from './level2.png';

export const BOARD_BACKGROUNDS = [
  {
    title: 'yellow sand',
    description: 'Slow for rolling',
    image: Background1,
    frictionCoefficient: 0.5,
    currentFieldColor: 'gold',
  },
  {
    frictionCoefficient: 1,
    title: 'space1',
    description: 'Slow for rolling',
    image: Background2,
    currentFieldColor: '#4666ff',
  },
  {
    frictionCoefficient: 1,
    title: 'space2',
    description: 'Slow for rolling',
    image: Background3,
    currentFieldColor: '#bc13fe',
  },
  {
    frictionCoefficient: 0.5,
    title: 'red sand',
    description: 'Slow for rolling',
    image: Background4,
    currentFieldColor: 'sandybrown',
  },
  {
    frictionCoefficient: 0.9,
    title: 'wooden surface',
    description: 'Slow for rolling',
    image: Background5,
    currentFieldColor: 'sandybrown',
  },
  {
    frictionCoefficient: 0.5,
    title: 'sea',
    description: 'Slow for rolling',
    image: Brick7,
    currentFieldColor: '#006994',
  },
  {
    frictionCoefficient: 0.8,
    title: 'grass',
    description: 'Slow for rolling',
    image: Brick4,
    currentFieldColor: '#567d46',
  },
  {
    frictionCoefficient: 0.9,
    title: 'ice',
    description: 'Slow for rolling',
    image: Brick5,
    currentFieldColor: '#006994',
  },
  {
    frictionCoefficient: 0.5,
    title: 'moving water',
    description: 'Slow for rolling',
    image: Background6,
    currentFieldColor: '#006994',
  },
  {
    frictionCoefficient: 0.5,
    title: 'underwater',
    description: 'Slow for rolling',
    image: Background7,
    currentFieldColor: '#00b0ff',
  },
];

export const WALLS = [
  {
    title: 'castle wall',
    description: 'Castle wall deisgn',
    wall: Brick1,
    rotatedWall: RotatedBrick1,
  },
  {
    title: 'brick wall',
    description: 'classic orange brick wall',
    wall: Brick2,
    rotatedWall: RotatedBrick2,
  },
  {
    title: 'dark castle wall',
    description: 'classic orange brick wall',
    wall: Brick3,
    rotatedWall: RotatedBrick3,
  },
  {
    title: 'grassy maze',
    description: 'classic orange brick wall',
    wall: Brick4,
    rotatedWall: RotatedBrick4,
  },
  {
    title: 'ice wall 1',
    description: 'classic orange brick wall',
    wall: Brick5,
    rotatedWall: RotatedBrick5,
  },
  {
    title: 'ice wall 2',
    description: 'classic orange brick wall',
    wall: Brick6,
    rotatedWall: RotatedBrick6,
  },
  {
    title: 'water maze',
    description: 'classic orange brick wall',
    wall: Brick7,
    rotatedWall: RotatedBrick7,
  },
  {
    title: 'wooden wall',
    description: 'classic orange brick wall',
    wall: Brick8,
    rotatedWall: RotatedBrick8,
  },
  {
    title: 'sand wall',
    description: 'classic orange brick wall',
    wall: Background1,
    rotatedWall: Background1,
  },
];

export {
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7,
  Brick1,
  Brick2,
  Brick3,
  Brick4,
  Brick5,
  Brick6,
  Brick7,
  Brick8,
  RotatedBrick1,
  RotatedBrick2,
  RotatedBrick3,
  RotatedBrick4,
  RotatedBrick5,
  RotatedBrick6,
  RotatedBrick7,
  RotatedBrick8,
  TRexNoConnection,
  Level1Animation,
  Level3Animation,
  Level1Screen,
  Level2Screen,
};
