import { SET_NEXT_LEVEL_MENU_STATE } from '../actions/types';
import { IActionSetNextLevelMenuState } from '../actions/actions';

export interface INextLevelMenuReducerState {
  nextLevelMenuState: string;
  isNextLevelMenuActive: boolean;
}

const initState: INextLevelMenuReducerState = {
  nextLevelMenuState: 'none',
  isNextLevelMenuActive: false,
};

const nextLevelMenuReducer = (
  state = initState,
  action: IActionSetNextLevelMenuState
) => {
  switch (action.type) {
    case SET_NEXT_LEVEL_MENU_STATE:
      let nextLevelMenuState;
      if (action.isNextLevelMenuActive) {
        nextLevelMenuState = 'flex';
      } else if (!action.isNextLevelMenuActive) {
        nextLevelMenuState = 'none';
      }
      return { ...state, nextLevelMenuState };

    default:
      return state;
  }
};

export default nextLevelMenuReducer;
