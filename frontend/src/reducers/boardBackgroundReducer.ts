import { SET_BOARD_BACKGROUND } from '../actions/types';
import { IActionSetBoardBackground } from '../actions/actions';
import { Background6 } from '../images';

export interface IBoardBackgroundReducerState {
  boardBackground: string;
}

const initState: IBoardBackgroundReducerState = {
  boardBackground: Background6,
};

const boardBackgroundReducer = (
  state = initState,
  action: IActionSetBoardBackground
) => {
  switch (action.type) {
    case SET_BOARD_BACKGROUND:
      const { boardBackground } = action;
      return {
        ...state,
        boardBackground,
      };
    default:
      return state;
  }
};

export default boardBackgroundReducer;
