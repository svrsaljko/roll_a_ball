import { SET_PAUSE_MENU_STATE } from '../actions/types';
import { IActionSetPauseMenuState } from '../actions/actions';

export interface IPauseMenuReducerState {
  pauseMenuState: string;
}

const initState: IPauseMenuReducerState = {
  pauseMenuState: 'none',
};

const pauseMenuReducer = (
  state = initState,
  action: IActionSetPauseMenuState
) => {
  switch (action.type) {
    case SET_PAUSE_MENU_STATE:
      let pauseMenuState;
      if (state.pauseMenuState === 'none') {
        pauseMenuState = 'block';
      } else {
        pauseMenuState = 'none';
      }
      return {
        pauseMenuState,
      };

    default:
      return state;
  }
};

export default pauseMenuReducer;
