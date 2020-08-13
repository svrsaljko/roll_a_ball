import { SET_GAME_END_MENU_STATE } from '../actions/types';
import { IActionSetGameEndMenuState } from '../actions/actions';

export interface IGameEndMenuReducerState {
  isGameEndMenuActive: boolean;
  gameEndMenuState: string;
}

const initState: IGameEndMenuReducerState = {
  isGameEndMenuActive: false,
  gameEndMenuState: 'none',
};

const gameEndMenuReducer = (
  state = initState,
  action: IActionSetGameEndMenuState
) => {
  switch (action.type) {
    case SET_GAME_END_MENU_STATE:
      const { isGameEndMenuActive } = action;
      let gameEndMenuState;
      if (isGameEndMenuActive) {
        gameEndMenuState = 'block';
      } else if (!isGameEndMenuActive) {
        gameEndMenuState = 'none';
      }
      return {
        ...state,
        isGameEndMenuActive,
        gameEndMenuState,
      };
    default:
      return state;
  }
};

export default gameEndMenuReducer;
