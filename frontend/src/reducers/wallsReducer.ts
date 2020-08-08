// import { SET_ALL_FIELDS } from '../actions/types';
// import { IActionSetAllFields } from '../actions/actions';

import { Brick1, RotatedBrick1 } from '../images';

export interface IWallsReducerState {
  brick: string;
  rotatedBrick: string;
}

const initState: IWallsReducerState = {
  brick: Brick1,
  rotatedBrick: RotatedBrick1,
};

const wallsReducer = (state = initState) => {
  return state;
};

export default wallsReducer;
