import { SET_CURRENT_LEVEL, SET_BALL_START_FIELD_ID } from '../actions/types';
import { IActionLevelReducer } from '../actions/actions';

export interface ILevelReducerState {
  currentLevel: number;
  ballStartFieldId: number;
}

const initState: ILevelReducerState = {
  currentLevel: 1,
  ballStartFieldId: 10,
};

const levelReducer = (state = initState, action: IActionLevelReducer) => {
  switch (action.type) {
    case SET_CURRENT_LEVEL:
      const { currentLevel } = action;
      return {
        ...state,
        currentLevel,
      };
    case SET_BALL_START_FIELD_ID:
      const { ballStartFieldId } = action;
      return {
        ...state,
        ballStartFieldId,
      };

    default:
      return state;
  }
};

export default levelReducer;
