import { UPDATE_FIELD } from '../actions/types';
import { IActionUpdateField } from '../actions/actions';
import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../components/levelGenerator/Constants';
import { updateField } from '../helper/helper';

export interface ILevelGeneratorReducerState {
  fields: IField[];
}

const initializeFields = () => {
  console.log('initialize field');
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
  let clickCounter: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // INITIALIZE SURROUNDING WALLS

      clickCounter = 0;

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

      // assign clickCounter to side walls
      if (leftWall) {
        clickCounter = 1;
      }
      if (topWall) {
        clickCounter = 2;
      }
      if (rightWall) {
        clickCounter = 3;
      }
      if (bottomWall) {
        clickCounter = 4;
      }
      // assign clickCounter to corners

      if (leftWall && bottomWall) {
        clickCounter = 5;
      }
      if (leftWall && topWall) {
        clickCounter = 6;
      }

      if (rightWall && topWall) {
        clickCounter = 7;
      }
      if (rightWall && bottomWall) {
        clickCounter = 8;
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
        clickCounter,
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

const initState: ILevelGeneratorReducerState = {
  fields: initializeFields(),
};

const levelGeneratorReducer = (
  state = initState,
  action: IActionUpdateField
) => {
  switch (action.type) {
    case UPDATE_FIELD:
      const { fieldId, clickCounter } = action;

      const fields = state.fields.map((field) => {
        if (field.fieldId === fieldId) {
          return updateField(field, clickCounter);
        }
        return field;
      });
      return {
        fields,
      };
    default:
      return state;
  }
};

export default levelGeneratorReducer;
