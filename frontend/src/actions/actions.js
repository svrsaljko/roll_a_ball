import { SET_ALL_FIELDS } from './types';

export const setAllFields = fields => {
  return { type: SET_ALL_FIELDS, fields };
};
