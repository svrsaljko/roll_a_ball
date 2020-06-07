import React from 'react';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/Constants';
import { IField } from '../interfaces/IField';

const initializeLevel = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
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
    }
  }
  return fields;
};

function Levels(WrappedComponent: any) {
  const fields: IField[] = initializeLevel();
  return (props: any) => {
    console.log('levels PROPSSSS: ', props);

    return (
      <div
        style={{
          //border: '3px solid green'
          border: '3px solid green',
        }}
      >
        <WrappedComponent fields={fields} {...props} />
      </div>
    );
  };
}
export default Levels;
