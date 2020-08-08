import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import levelReducer, { ILevelReducerState } from './levelReducer';
import scoreReducer, { IScoreReducerState } from './scoreReducer';
import pauseMenuReducer, { IPauseMenuReducerState } from './pauseMenuReducer';
import nextLevelMenuReducer, {
  INextLevelMenuReducerState,
} from './nextLevelMenuReducer';
import timerReducer, { ITimerReducerState } from './timerReducer';
import boardBackgroundReducer, {
  IBoardBackgroundReducerState,
} from './boardBackgroundReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  levelReducer: ILevelReducerState;
  scoreReducer: IScoreReducerState;
  pauseMenuReducer: IPauseMenuReducerState;
  nextLevelMenuReducer: INextLevelMenuReducerState;
  timerReducer: ITimerReducerState;
  boardBackgroundReducer: IBoardBackgroundReducerState;
}

export default combineReducers({
  fieldsReducer,
  levelReducer,
  scoreReducer,
  pauseMenuReducer,
  nextLevelMenuReducer,
  timerReducer,
  boardBackgroundReducer,
});
