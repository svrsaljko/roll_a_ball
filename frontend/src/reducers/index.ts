import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import levelReducer, { ILevelReducerState } from './levelReducer';
import scoreReducer, { IScoreReducerState } from './scoreReducer';
import pauseMenuReducer, { IPauseMenuReducerState } from './pauseMenuReducer';
import nextLevelMenuReducer, {
  INextLevelMenuReducerState,
} from './nextLevelMenuReducer';
import timerReducer, { ITimerReducerState } from './timerReducer';

import gameOverMenuReducer, {
  IGameOverMenuReducerState,
} from './gameOverMenuReducer';
import startGameReducer, { IStartGameReducerState } from './startGameReducer';
import gameEndMenuReducer, {
  IGameEndMenuReducerState,
} from './gameEndMenuReducer';
import userHighscoreReducer, {
  IUserHighscoreReducerState,
} from './userHighscoreReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  levelReducer: ILevelReducerState;
  scoreReducer: IScoreReducerState;
  pauseMenuReducer: IPauseMenuReducerState;
  nextLevelMenuReducer: INextLevelMenuReducerState;
  timerReducer: ITimerReducerState;
  gameOverMenuReducer: IGameOverMenuReducerState;
  startGameReducer: IStartGameReducerState;
  gameEndMenuReducer: IGameEndMenuReducerState;
  userHighscoreReducer: IUserHighscoreReducerState;
}

export default combineReducers({
  fieldsReducer,
  levelReducer,
  scoreReducer,
  pauseMenuReducer,
  nextLevelMenuReducer,
  timerReducer,
  gameOverMenuReducer,
  startGameReducer,
  gameEndMenuReducer,
  userHighscoreReducer,
});
