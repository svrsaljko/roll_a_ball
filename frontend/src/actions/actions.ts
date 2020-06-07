import { SET_ALL_FIELDS } from './types';
import { SET_CURRENT_LEVEL } from './types';
import { IField } from '../interfaces/IField';
// import { ILevel } from '../interfaces/ILevel';

export interface IActionSetAllFields {
  type: string;
  fields: IField[];
}

export interface IActionSetCurrentLevel {
  type: string;
  currentLevel: number;
}

export const setAllFields = (fields: IField[]) => {
  return { type: SET_ALL_FIELDS, fields };
};

export const setCurrentLevel = (currentLevel: number) => {
  return { type: SET_CURRENT_LEVEL, currentLevel };
};
