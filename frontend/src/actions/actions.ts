import {
  SET_ALL_FIELDS,
  SET_CURRENT_LEVEL,
  REMOVE_DIAMOND_FROM_FIELD,
  SET_SCORE,
  SET_PAUSE_MENU_STATE,
  UPDATE_FIELD,
} from './types';

import { IField } from '../interfaces/IField';

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

export interface IActionSetPauseMenuState {
  type: string;
}

export interface IActionUpdateField {
  type: string;
  fieldId: number;
  clickCounter: number;
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

export const setPauseMenuState = () => {
  return { type: SET_PAUSE_MENU_STATE };
};

export const updateField = (fieldId: number, clickCounter: number) => {
  return { type: UPDATE_FIELD, fieldId, clickCounter };
};
