import { SET_GAME_OVER_MENU_STATE } from '../actions/types';
import { IActionSetGameOverMenuState } from '../actions/actions';

export interface IGameOverMenuReducerState {
  gameOverMenuState: string;
  isGameOverMenuActive: boolean;
}

const initState: IGameOverMenuReducerState = {
  gameOverMenuState: 'none',
  // gameOverMenuState: 'flex',
  isGameOverMenuActive: false,
};

const gameOverMenuReducer = (
  state = initState,
  action: IActionSetGameOverMenuState
) => {
  switch (action.type) {
    case SET_GAME_OVER_MENU_STATE:
      const { isGameOverMenuActive } = action;
      let gameOverMenuState;
      if (isGameOverMenuActive) {
        gameOverMenuState = 'flex';
      } else if (!isGameOverMenuActive) {
        gameOverMenuState = 'none';
      }
      return { ...state, gameOverMenuState };

    default:
      return state;
  }
};

export default gameOverMenuReducer;
