import {
  SET_START_GAME_STATE,
  SET_START_GAME_MENU_STATE,
} from '../actions/types';
import { IActionStartGameState } from '../actions/actions';

export interface IStartGameReducerState {
  startGame: boolean;
  startGameMenuState: string;
}

const initState: IStartGameReducerState = {
  startGame: false,
  startGameMenuState: 'block',
};

const startGameReducer = (state = initState, action: IActionStartGameState) => {
  switch (action.type) {
    case SET_START_GAME_STATE:
      const { startGame } = action;
      return { ...state, startGame };
    case SET_START_GAME_MENU_STATE:
      const { startGameMenuState } = action;
      return { ...state, startGameMenuState };
    default:
      return state;
  }
};

export default startGameReducer;
