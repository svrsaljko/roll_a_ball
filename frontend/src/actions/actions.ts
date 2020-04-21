import { SET_ALL_FIELDS } from './types';
import { IField } from '../interfaces/IField';

export interface IActionSetAllFields {
  type: string;
  fields: IField[];
}

export const setAllFields = (fields: IField[]) => {
  return { type: SET_ALL_FIELDS, fields };
};
