import { SET_CURRENT_LEVEL, SET_BALL_START_FIELD_ID } from '../actions/types';
import { IActionLevelReducer } from '../actions/actions';

export interface ILevelReducerState {
  currentLevel: number;
  ballStartFieldId: number;
  ballColor: string;
}

const initState: ILevelReducerState = {
  currentLevel: 1,
  ballStartFieldId: 10,
  ballColor: '#1b03a3',
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
      const { ballStartFieldId, ballColor } = action;
      return {
        ...state,
        ballColor,
        ballStartFieldId,
      };

    default:
      return state;
  }
};

export default levelReducer;
