import { SET_ALL_WALLS_COORDINATES } from './types';

export const setAllWallsCoordinates = wallsCoordinates => {
  return { type: SET_ALL_WALLS_COORDINATES, wallsCoordinates };
};
