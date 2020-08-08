import React from 'react';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/Constants';
import {
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
} from '../images';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';

const initializeLevels = () => {
  const level1 = initializeLevel2();
  const level2 = initializeLevel();
  const level3 = initializeLevel();
  const level4 = initializeLevel();

  const levels = [level4, level1, level2, level3];
  return levels;
};

const initializeField = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;
  // BALL
  let hasDarkRedBall: boolean = false;
  let hasIceBall: boolean = false;
  let hasNeonBlueBall: boolean = false;
  // DOOR
  let hasBlackDoor: boolean = false;
  let hasGoldDoor: boolean = false;
  let hasIceDoor: boolean = false;
  // ITEMS
  let hasGold: boolean = false;
  let hasSilver: boolean = false;
  let hasDiamond: boolean = false;
  let hasEmerald: boolean = false;
  let hasSapphire: boolean = false;
  let hasRuby: boolean = false;
  // ENEMY
  let hasNeonRedEnemy: boolean = false;
  let hasNeonGreenEnemy: boolean = false;
  let hasNeonBlueEnemy: boolean = false;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // INITIALIZE SURROUNDING WALLS
      if (i === 0) {
        topWall = true;
      }
      if (i === NUMBER_OF_ROWS - 1) {
        bottomWall = true;
      }
      if (j === 0) {
        leftWall = true;
      }
      if (j === NUMBER_OF_COLUMNS - 1) {
        rightWall = true;
      }
      // LEVEL

      if (fieldId === 50) {
        hasBlackDoor = true;
      }

      //
      top = FIELD_HEIGHT * i;
      left = FIELD_WIDTH * j;

      leftFieldId = j === 0 ? null : fieldId - 1;
      rightFieldId = j === NUMBER_OF_COLUMNS - 1 ? null : fieldId + 1;
      topFieldId = i === 0 ? null : fieldId - NUMBER_OF_COLUMNS;
      bottomFieldId =
        i === NUMBER_OF_ROWS - 1 ? null : fieldId + NUMBER_OF_COLUMNS;

      field = {
        top,
        left,
        topWall,
        bottomWall,
        rightWall,
        leftWall,

        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
        //BALL
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
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;

      //BALL
      hasDarkRedBall = false;
      hasIceBall = false;
      hasNeonBlueBall = false;
      // DOOR
      hasBlackDoor = false;
      hasGoldDoor = false;
      hasIceDoor = false;
      // ITEMS
      hasGold = false;
      hasSilver = false;
      hasDiamond = false;
      hasEmerald = false;
      hasSapphire = false;
      hasRuby = false;
      // ENEMY
      hasNeonRedEnemy = false;
      hasNeonGreenEnemy = false;
      hasNeonBlueEnemy = false;
    }
  }

  return fields;
};

const initializeLevel = () => {
  const level: ILevel = {
    fields: initializeField(),
    ballColor: '#1b03a3',
    ballStartFieldId: 70,
    brick: Brick3,
    rotatedBrick: RotatedBrick3,
    boardBackground: Background6,
  };
  return level;
};
const initializeLevel2 = () => {
  const level: ILevel = {
    fields: initializeField(),
    ballColor: '#dcf3ff',
    ballStartFieldId: 20,
    brick: Brick4,
    rotatedBrick: RotatedBrick4,
    boardBackground: Background7,
  };
  return level;
};

function Levels(WrappedComponent: any) {
  let levels = initializeLevels();

  return (props: any) => {
    return (
      <div>
        <WrappedComponent levels={levels} {...props} />
      </div>
    );
  };
}
export default Levels;
