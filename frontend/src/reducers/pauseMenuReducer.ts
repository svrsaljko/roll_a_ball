import { SET_PAUSE_MENU_STATE } from '../actions/types';
import { IActionSetPauseMenuState } from '../actions/actions';

export interface IPauseMenuReducerState {
  pauseMenuState: string;
  isGamePaused: boolean;
}

const initState: IPauseMenuReducerState = {
  pauseMenuState: 'none',
  isGamePaused: false,
};

const pauseMenuReducer = (
  state = initState,
  action: IActionSetPauseMenuState
) => {
  switch (action.type) {
    case SET_PAUSE_MENU_STATE:
      let pauseMenuState;
      let isGamePaused;
      if (state.pauseMenuState === 'none') {
        pauseMenuState = 'block';
        isGamePaused = true;
      } else {
        pauseMenuState = 'none';
        isGamePaused = false;
      }
      return {
        pauseMenuState,
        isGamePaused,
      };

    default:
      return state;
  }
};

export default pauseMenuReducer;
