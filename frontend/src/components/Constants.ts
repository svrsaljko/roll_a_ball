import { getUsername } from '../service/authService';

export const NUMBER_OF_ROWS = 10;
export const NUMBER_OF_COLUMNS = 9;
//export const BOARD_WIDTH = 360;
export const BOARD_WIDTH = window.outerWidth;
export const BOARD_HEIGHT = window.outerHeight;
// export const BOARD_HEIGHT = 530;
export const SENSITIVITY = 0.0;
export const FIELD_WIDTH = BOARD_WIDTH / NUMBER_OF_COLUMNS;
export const FIELD_HEIGHT = BOARD_HEIGHT / NUMBER_OF_ROWS;
export const START_TIME = 20;
export const VERTICAL_BRICK_S_HEIGHT = FIELD_HEIGHT * 0.5;
export const VERTICAL_BRICK_M_HEIGHT = FIELD_HEIGHT * (2 / 3);
export const VERTICAL_BRICK_WIDTH = 0.5 * FIELD_WIDTH;

export const HORIZONTAL_BRICK_WIDTH = FIELD_WIDTH;
export const HORIZONTAL_BRICK_HEIGHT = FIELD_HEIGHT * (1 / 3);
export const BALL_SIZE = HORIZONTAL_BRICK_HEIGHT * 0.45;

// URLS

const URL_HIGHSCORE = 'http://localhost:8000/private/highscore';
export const URL_PATCH_USER_HIGHSCORE = `${URL_HIGHSCORE}`;
export const URL_GET_USER_HIGHSCORE = `${URL_HIGHSCORE}?userName=${getUsername()}`;
export const URL_GET_SCOREBOARD = `${URL_HIGHSCORE}/list?userName=${getUsername()}`;
