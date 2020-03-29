import { SET_ALL_WALLS_COORDINATES } from '../actions/types';

const initState = {
  wallsCoordinates: []
};

const wallsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_WALLS_COORDINATES:
      return {
        wallsCoordinates: action.wallsCoordinates
      };

    default:
      return state;
  }
};

export default wallsReducer;
