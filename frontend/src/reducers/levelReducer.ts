import { SET_CURRENT_LEVEL } from '../actions/types';
import { IActionSetCurrentLevel } from '../actions/actions';

export interface ILevelReducerState {
  currentLevel: number;
}

const initState: ILevelReducerState = {
  currentLevel: 1,
};

const levelReducer = (state = initState, action: IActionSetCurrentLevel) => {
  switch (action.type) {
    case SET_CURRENT_LEVEL:
      const { currentLevel } = action;
      return {
        currentLevel,
      };

    default:
      return state;
  }
};

export default levelReducer;
