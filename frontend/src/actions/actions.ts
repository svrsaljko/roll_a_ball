import {
  SET_ALL_FIELDS,
  SET_CURRENT_LEVEL,
  REMOVE_DIAMOND_FROM_FIELD,
  SET_SCORE,
} from './types';

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

export interface IActionSetScore {
  type: string;
  newScore: number;
}

export const setAllFields = (fields: IField[]) => {
  return { type: SET_ALL_FIELDS, fields };
};

export const setCurrentLevel = (currentLevel: number) => {
  return { type: SET_CURRENT_LEVEL, currentLevel };
};

export const removeDiamondFromField = (fields: IField[]) => {
  return { type: REMOVE_DIAMOND_FROM_FIELD, fields };
};

export const setScore = (newScore: number) => {
  return { type: SET_SCORE, newScore };
};
