import { SET_SCORE } from '../actions/types';
import { IActionSetScore } from '../actions/actions';

export interface IScoreReducerState {
  currentScore: number;
  currentLevelScore: number;
}

const initState: IScoreReducerState = {
  currentScore: 0,
  currentLevelScore: 0,
};

const scoreReducer = (state = initState, action: IActionSetScore) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        currentScore: action.newScore,
      };

    default:
      return state;
  }
};

export default scoreReducer;
