import { SET_CURRENT_LEVEL } from '../actions/types';
import { IActionSetCurrentLevel } from '../actions/actions';
import { ILevel } from '../interfaces/ILevel';

export interface ILevelReducerState {
  currentLevel: number;
}

const initState: ILevelReducerState = {
  currentLevel: 1,
};

const levelReducer = (state = initState, action: IActionSetCurrentLevel) => {
  switch (action.type) {
    case SET_CURRENT_LEVEL:
      return {
        currentLevel: action.currentLevel,
      };

    default:
      return state;
  }
};

export default levelReducer;
