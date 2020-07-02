import React from 'react';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/Constants';
import { IField } from '../interfaces/IField';

const initializeLevels = () => {
  const level1 = initializeLevel();
  const level2 = initializeLevel2();
  const level3 = initializeLevel3();
  const level4 = initializeLevel5();

  const levels = [level4, level1, level2, level3];
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
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      //TESTNI LEVEL
      if (i === 8 && j === 7) {
        hasHole = true;
      }

      if ((i === 4 && j === 1) || (i === 4 && j === 5)) {
        hasDiamond = true;
      }

      if (j === 2) {
        if (i === 7) {
          bottomWall = true;
          leftWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          leftWall = true;
        }
        if (i === 3) {
          topWall = true;
          leftWall = true;
        }
        if (i === 5) {
          bottomWall = true;
        }
      }
      if (j === 4) {
        if (i === 2) {
          topWall = true;
          leftWall = true;
        }
        if (i === 8) {
          bottomWall = true;
          rightWall = true;
        }
      }
      if (j === 6) {
        if (i === 7) {
          bottomWall = true;
          rightWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          rightWall = true;
        }
        if (i === 3) {
          topWall = true;
          rightWall = true;
        }
        if (i === 5) {
          topWall = true;
        }
      }

      if (j === 3 || j === 5) {
        if (i === 3) {
          topWall = true;
          bottomWall = true;
        }
        if (i === 7) {
          topWall = true;
          bottomWall = true;
        }
      }
      if ((i === 5 || i === 4 || i === 6) && j === 4) {
        leftWall = true;
        rightWall = true;
      }
      if (i === 5 && (j === 3 || j === 5)) {
        leftWall = true;
        rightWall = true;
      }

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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
};

const initializeLevel2 = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      //TESTNI LEVEL
      if (i === 8 && j === 7) {
        hasHole = true;
      }

      if ((i === 4 && j === 1) || (i === 4 && j === 5)) {
        hasDiamond = true;
      }

      if (j === 2) {
        if (i === 7) {
          bottomWall = true;
          leftWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          leftWall = true;
        }
        if (i === 3) {
          topWall = true;
          leftWall = true;
        }
        if (i === 5) {
          bottomWall = true;
        }
      }
      if (j === 4) {
        if (i === 2) {
          topWall = true;
          leftWall = true;
        }
        if (i === 8) {
          bottomWall = true;
          rightWall = true;
        }
      }
      if (j === 6) {
        if (i === 7) {
          bottomWall = true;
          rightWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          rightWall = true;
        }
        if (i === 3) {
          topWall = true;
          rightWall = true;
        }
        if (i === 5) {
          topWall = true;
        }
      }

      // if (j === 3 || j === 5) {
      //   if (i === 3) {
      //     topWall = true;
      //     bottomWall = true;
      //   }
      //   if (i === 7) {
      //     topWall = true;
      //     bottomWall = true;
      //   }
      // }
      if ((i === 5 || i === 4 || i === 6) && j === 4) {
        leftWall = true;
        rightWall = true;
      }
      if (i === 5 && (j === 3 || j === 5)) {
        leftWall = true;
        rightWall = true;
      }

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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
};

const initializeLevel3 = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      //TESTNI LEVEL
      if (i === 8 && j === 7) {
        hasHole = true;
      }

      if ((i === 4 && j === 1) || (i === 4 && j === 5)) {
        hasDiamond = true;
      }

      if (i === 5 && (j === 3 || j === 5)) {
        leftWall = true;
        rightWall = true;
      }

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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
};

// SKULL LEVEL
const initializeLevel4 = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      //TESTNI LEVEL

      if (i === 1 && j >= 1 && j <= 7) {
        bottomWall = true;
      }
      if (i === 2 && j >= 1 && j <= 7) {
        leftWall = true;
        rightWall = true;
      }
      if (i === 3 && (j === 1 || j === 2 || j === 4 || j === 6 || j === 7)) {
        leftWall = true;
        rightWall = true;
      }

      if (i === 4 && j >= 1 && j <= 7 && j !== 4) {
        leftWall = true;
        rightWall = true;
      }

      if (i === 4 && j === 4) {
        topWall = true;
      }

      if (i === 5 && j >= 2 && j <= 6) {
        leftWall = true;
        rightWall = true;
      }

      if (i === 6 && (j === 2 || j === 4 || j === 6)) {
        topWall = true;
        bottomWall = true;
      }

      if (i === 6 && (j === 3 || j === 5)) {
        hasDiamond = true;
      }

      if (i === 7 && j >= 2 && j <= 6) {
        leftWall = true;
        rightWall = true;
      }

      if (i === 8 && j === 7) {
        hasHole = true;
      }

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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
};

// SHIP LEVEL
const initializeLevel5 = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      // TESTNI LEVEL
      if (j === 1 && i >= 3 && i <= 6) {
        leftWall = true;
        rightWall = true;
      }
      if (j === 1 && (i === 2 || i === 7)) {
        rightWall = true;
      }

      //
      if (j === 2 && i >= 2 && i <= 7) {
        leftWall = true;
        rightWall = true;
      }

      if (j === 2 && (i === 1 || i === 8)) {
        rightWall = true;
      }

      if (j > 2 && j < 6 && i === 4) {
        bottomWall = true;
      }

      if (j === 6 && i === 4) {
        rightWall = true;
        bottomWall = true;
      }
      if (j === 6 && i === 3) {
        leftWall = true;
        bottomWall = true;
      }

      if (j === 5 && i === 2) {
        leftWall = true;
        bottomWall = true;
      }
      if (j === 4 && i === 2) {
        topWall = true;
        leftWall = true;
      }

      if (j === 4 && (i === 3 || i === 4)) {
        leftWall = true;
      }

      if (i === 3 && j === 3) {
        hasDiamond = true;
      }
      if (i === 1 && j === 6) {
        hasDiamond = true;
      }

      if (i === 6 && j === 4) {
        hasHole = true;
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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
};
// POKE-BALL LEVEL
const initializeLevel6 = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
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
      // TESTNI LEVEL
      if ((i === 4 || i === 5) && j === 7) {
        rightWall = true;
        leftWall = true;
      }
      if ((i === 3 || i === 6) && j === 7) {
        leftWall = true;
      }
      if (i >= 3 && i <= 6 && j === 6) {
        rightWall = true;
        leftWall = true;
      }

      if ((i === 2 || i === 7) && j === 6) {
        leftWall = true;
      }

      if (j === 5 && (i === 2 || i === 7)) {
        rightWall = true;
        leftWall = true;
      }

      if (j === 4 && i === 2) {
        topWall = true;
        rightWall = true;
      }
      if (j === 4 && i === 1) {
        bottomWall = true;
      }
      if (j === 4 && i === 7) {
        bottomWall = true;
        rightWall = true;
      }
      if (j === 4 && i === 8) {
        topWall = true;
      }

      if (j === 3 && i === 2) {
        topWall = true;
      }
      if (j === 3 && i === 7) {
        bottomWall = true;
      }

      if ((i === 4 || i === 5) && j === 1) {
        leftWall = true;
      }
      if ((i === 3 || i === 6) && j === 1) {
        rightWall = true;
      }

      if ((i === 2 || i === 7) && j === 2) {
        // leftWall = true;
        rightWall = true;
      }

      if (i === 3 && j === 2) {
        topWall = true;
      }
      if (i === 6 && j === 2) {
        bottomWall = true;
      }

      if ((i === 3 || i === 6) && j === 5) {
        leftWall = true;
        rightWall = true;
      }
      if ((i === 4 || i === 5) && j === 5) {
        rightWall = true;
      }

      if (i === 4 && j === 4) {
        bottomWall = true;
      }

      if (i === 3 && j === 4) {
        bottomWall = true;
        rightWall = true;
      }

      if (i === 5 && j === 4) {
        topWall = true;
      }

      if (i === 6 && j === 4) {
        rightWall = true;
        topWall = true;
      }

      if (i === 3 && j === 3) {
        bottomWall = true;
      }
      if (i === 6 && j === 3) {
        topWall = true;
      }

      if (j === 3 && (i === 4 || i === 5)) {
        leftWall = true;
      }

      if (i === 8 && j === 7) {
        hasHole = true;
      }

      if (i === 2 && (j === 1 || j === 7)) {
        hasDiamond = true;
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
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }
  return fields;
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
