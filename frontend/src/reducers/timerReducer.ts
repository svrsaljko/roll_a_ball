import { SET_CURRENT_TIME } from '../actions/types';
import { IActionSetCurrentTime } from '../actions/actions';
import { START_TIME } from '../components/Constants';

export interface ITimerReducerState {
  currentTime: number;
}

const initState: ITimerReducerState = {
  currentTime: START_TIME,
};

const timerReducer = (state = initState, action: IActionSetCurrentTime) => {
  switch (action.type) {
    case SET_CURRENT_TIME:
      const { currentTime } = action;
      return { ...state, currentTime };

    default:
      return state;
  }
};

export default timerReducer;
