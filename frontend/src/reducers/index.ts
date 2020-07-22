import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import levelReducer, { ILevelReducerState } from './levelReducer';
import scoreReducer, { IScoreReducerState } from './scoreReducer';
import pauseMenuReducer, { IPauseMenuReducerState } from './pauseMenuReducer';
import levelGeneratorReducer, {
  ILevelGeneratorReducerState,
} from './levelGeneratorReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  levelReducer: ILevelReducerState;
  scoreReducer: IScoreReducerState;
  pauseMenuReducer: IPauseMenuReducerState;
  levelGeneratorReducer: ILevelGeneratorReducerState;
}

export default combineReducers({
  fieldsReducer,
  levelReducer,
  scoreReducer,
  pauseMenuReducer,
  levelGeneratorReducer,
});
