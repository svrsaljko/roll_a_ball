import { SET_ALL_FIELDS } from '../actions/types';

const initState = {
  fields: []
};

const fieldsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_FIELDS:
      return {
        fields: action.fields
      };

    default:
      return state;
  }
};

export default fieldsReducer;
