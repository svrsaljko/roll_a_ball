import { getUsername } from '../service/authService';

export const NUMBER_OF_ROWS = 10;
export const NUMBER_OF_COLUMNS = 9;
export const BOARD_WIDTH = window.outerWidth;
export const BOARD_HEIGHT = 0.8545 * window.outerHeight;
export const GAME_FOOTER_HEIGHT = 0.05 * window.outerHeight;
export const SENSITIVITY = 0.0;
export const FIELD_WIDTH = BOARD_WIDTH / NUMBER_OF_COLUMNS;
export const FIELD_HEIGHT = BOARD_HEIGHT / NUMBER_OF_ROWS;
export const START_TIME = 60;
export const VERTICAL_BRICK_S_HEIGHT = FIELD_HEIGHT * 0.5;
export const VERTICAL_BRICK_M_HEIGHT = FIELD_HEIGHT * (2 / 3);
export const VERTICAL_BRICK_WIDTH = 0.5 * FIELD_WIDTH;

export const HORIZONTAL_BRICK_WIDTH = FIELD_WIDTH;
export const HORIZONTAL_BRICK_HEIGHT = FIELD_HEIGHT * (1 / 3);
export const BALL_SIZE = HORIZONTAL_BRICK_HEIGHT * 0.45;

export const MAX_INPUT_CHAR = 40;

// URLS
const URL_HIGHSCORE = 'http://localhost:8000/private/highscore';
export const URL_PATCH_USER_HIGHSCORE = `${URL_HIGHSCORE}`;
export const URL_GET_USER_HIGHSCORE = `${URL_HIGHSCORE}?userName=${getUsername()}`;
export const URL_GET_SCOREBOARD = `${URL_HIGHSCORE}/list?userName=${getUsername()}`;

export const isEmail = (email: string) => {
  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return emailPattern.test(email);
};
