import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
}

export default combineReducers({
  fieldsReducer,
});
