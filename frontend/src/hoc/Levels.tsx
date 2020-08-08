import React from 'react';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/Constants';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';

const initializeLevels = () => {
  const level1 = initializeLevel();
  const level2 = initializeLevel();
  const level3 = initializeLevel();
  const level4 = initializeLevel();

  const levels = [level4, level4, level2, level3];
  return levels;
};

const initializeLevel = () => {
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

  const level: ILevel = {
    fields,
    hasDarkRedBall: false,
    hasNeonBlueBall: false,
    hasIceBall: false,
    ballStartFieldId: 70,
  };
  return level;
};

// any dodati tip !!!!!!
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
