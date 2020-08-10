import {
  SET_ALL_FIELDS,
  SET_CURRENT_LEVEL,
  REMOVE_DIAMOND_FROM_FIELD,
  SET_SCORE,
  SET_PAUSE_MENU_STATE,
  SET_NEXT_LEVEL_MENU_STATE,
  SET_CURRENT_TIME,
  SET_BALL_START_FIELD_ID,
  SET_BOARD_BACKGROUND,
  SET_GAME_OVER_MENU_STATE,
} from './types';

import { IField } from '../interfaces/IField';

export interface IActionSetAllFields {
  type: string;
  fields: IField[];
}

export interface IActionSetCurrentLevel {
  type: typeof SET_CURRENT_LEVEL;
  currentLevel: number;
}

export interface IActionSetBallStartFieldId {
  type: typeof SET_BALL_START_FIELD_ID;
  ballStartFieldId: number;
  ballColor: string;
  ballSpeedCoefficient: number;
}

export type IActionLevelReducer =
  | IActionSetCurrentLevel
  | IActionSetBallStartFieldId;

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

export interface IActionSetNextLevelMenuState {
  type: string;
  isNextLevelMenuActive: boolean;
}
export interface IActionSetCurrentTime {
  type: string;
  currentTime: number;
}
export interface IActionSetBoardBackground {
  type: string;
  boardBackground: string;
  frictionCoefficient: number;
}
export interface IActionSetGameOverMenuState {
  type: string;
  isGameOverMenuActive: boolean;
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

export const setNextLevelMenuState = (isNextLevelMenuActive: boolean) => {
  return { type: SET_NEXT_LEVEL_MENU_STATE, isNextLevelMenuActive };
};

export const setCurrentTime = (currentTime: number) => {
  return { type: SET_CURRENT_TIME, currentTime };
};

export const setBallStartFieldId = (
  ballStartFieldId: number,
  ballColor: string,
  ballSpeedCoefficient: number
) => {
  return {
    type: SET_BALL_START_FIELD_ID,
    ballStartFieldId,
    ballColor,
    ballSpeedCoefficient,
  };
};

export const setBoardBackground = (
  boardBackground: string,
  frictionCoefficient: number
) => {
  return { type: SET_BOARD_BACKGROUND, boardBackground, frictionCoefficient };
};

export const setGameOverMenuState = (isGameOverMenuActive: boolean) => {
  return { type: SET_GAME_OVER_MENU_STATE, isGameOverMenuActive };
};
