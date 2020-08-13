import { SET_SCORE } from '../actions/types';
import { IActionSetScore } from '../actions/actions';

export interface IScoreReducerState {
  currentScore: number;
}

const initState: IScoreReducerState = {
  currentScore: 0,
};

const scoreReducer = (state = initState, action: IActionSetScore) => {
  switch (action.type) {
    case SET_SCORE:
      const { newScore } = action;
      return {
        ...state,
        currentScore: newScore,
      };

    default:
      return state;
  }
};

export default scoreReducer;
