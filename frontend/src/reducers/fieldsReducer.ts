import { SET_ALL_FIELDS } from '../actions/types';
import { IActionSetAllFields } from '../actions/actions';
import { IField } from '../interfaces/IField';

export interface IFieldsReducerState {
  fields: IField[];
}

const initState: IFieldsReducerState = {
  fields: [],
};

const fieldsReducer = (state = initState, action: IActionSetAllFields) => {
  switch (action.type) {
    case SET_ALL_FIELDS:
      return {
        fields: action.fields,
      };

    default:
      return state;
  }
};

export default fieldsReducer;
