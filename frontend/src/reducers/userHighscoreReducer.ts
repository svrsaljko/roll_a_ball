import { SET_USER_HIGHSCORE } from '../actions/types';
import { IActionSetUserHighscore } from '../actions/actions';

export interface IUserHighscoreReducerState {
  userHighscore: number;
}

const initState: IUserHighscoreReducerState = {
  userHighscore: 0,
};

const userHighscoreReducer = (
  state = initState,
  action: IActionSetUserHighscore
) => {
  switch (action.type) {
    case SET_USER_HIGHSCORE:
      const { userHighscore } = action;
      return {
        ...state,
        userHighscore,
      };

    default:
      return state;
  }
};

export default userHighscoreReducer;
