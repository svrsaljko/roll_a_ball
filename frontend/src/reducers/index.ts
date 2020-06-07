import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import levelReducer, { ILevelReducerState } from './levelReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  levelReducer: ILevelReducerState;
}

export default combineReducers({
  fieldsReducer,
  levelReducer,
});
