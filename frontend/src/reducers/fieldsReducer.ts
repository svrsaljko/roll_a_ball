import { SET_ALL_FIELDS } from '../actions/types';
import { REMOVE_DIAMOND_FROM_FIELD } from '../actions/types';
import { IActionFieldsStateReducer } from '../actions/actions';
import { IField } from '../interfaces/IField';

export interface IFieldsReducerState {
  fields: IField[];
}

const initState: IFieldsReducerState = {
  fields: [],
};

const fieldsReducer = (
  state = initState,
  action: IActionFieldsStateReducer
) => {
  const { fields } = action;
  switch (action.type) {
    case SET_ALL_FIELDS:
      return {
        fields,
      };
    case REMOVE_DIAMOND_FROM_FIELD:
      return {
        fields,
      };
    default:
      return state;
  }
};

export default fieldsReducer;
