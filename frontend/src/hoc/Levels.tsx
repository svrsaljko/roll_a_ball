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
  BOARD_BACKGROUNDS,
} from '../images';
import { BALL } from '../items/Items';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';

const initializeLevels = () => {
  const level1 = initializeLevel1();
  const level2 = initializeLevel1();
  const level3 = initializeLevel1();
  const level4 = initializeLevel1();

  const levels = [level1, level1, level2, level3];
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

const fieldsHardcoding1 = (fields: IField[]) => {
  fields[9].topWall = true;
  fields[10].topWall = true;
  fields[10].rightWall = true;
  fields[12].leftWall = true;
  fields[19].rightWall = true;
  fields[21].leftWall = true;
  fields[28].rightWall = true;
  fields[30].topWall = true;
  fields[31].topWall = true;
  fields[32].topWall = true;
  fields[34].topWall = true;
  fields[35].topWall = true;
  fields[37].rightWall = true;
  fields[38].bottomWall = true;
  fields[39].leftWall = true;
  fields[39].topWall = true;
  fields[40].topWall = true;
  fields[40].rightWall = true;
  fields[43].leftWall = true;
  fields[43].topWall = true;
  fields[49].rightWall = true;
  fields[50].leftWall = true;
  fields[51].rightWall = true;
  fields[59].leftWall = true;
  fields[60].rightWall = true;
  fields[68].leftWall = true;
  fields[69].rightWall = true;
  fields[77].leftWall = true;
  fields[78].rightWall = true;

  fields[22].hasDiamond = true;
  fields[25].hasDiamond = true;
  fields[23].hasSapphire = true;
  fields[61].hasSapphire = true;
  fields[20].hasEmerald = true;

  fields[29].hasEmerald = true;
  fields[55].hasRuby = true;
  fields[64].hasRuby = true;
  fields[56].hasGold = true;
  fields[73].hasIceDoor = true;
  fields[16].hasNeonBlueEnemy = true;
  fields[42].hasNeonGreenEnemy = true;
  fields[74].hasNeonGreenEnemy = true;
  fields[14].hasNeonGreenEnemy = true;

  return fields;
};

const initializeLevel1 = () => {
  const level: ILevel = {
    fields: fieldsHardcoding1(initializeField()),
    ballColor: BALL[0].ballColor,
    ballStartFieldId: 11,
    brick: Brick6,
    rotatedBrick: RotatedBrick6,
    boardBackground: BOARD_BACKGROUNDS[2].image,
    frictionCoefficient: BOARD_BACKGROUNDS[2].frictionCoefficient,
    ballSpeedCoefficient: BALL[0].ballSpeedCoefficient,
  };
  return level;
};
// const initializeLevel2 = () => {
//   const level: ILevel = {
//     fields: initializeField(),
//     ballColor: '#dcf3ff',
//     ballStartFieldId: 20,
//     brick: Brick4,
//     rotatedBrick: RotatedBrick4,
//     boardBackground: Background7,
//   };
//   return level;
// };

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
