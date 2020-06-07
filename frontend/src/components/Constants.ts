export const NUMBER_OF_ROWS = 10;
export const NUMBER_OF_COLUMNS = 9;
//export const BOARD_WIDTH = 360;
export const BOARD_WIDTH = window.outerWidth;
//export const BOARD_HEIGHT = window.outerHeight;
export const BOARD_HEIGHT = 530;
export const SENSITIVITY = 0.0;
export const FIELD_WIDTH = BOARD_WIDTH / NUMBER_OF_COLUMNS;
export const FIELD_HEIGHT = BOARD_HEIGHT / NUMBER_OF_ROWS;

//KONSTANTE ZA OBRISATI
export const BRICK_HEIGHT = 20;
//export const BRICK_WIDTH = BOARD_WIDTH / NUMBER_OF_COLUMNS;
//NOVE KONSTANTE
//VERTICAL BRICK
//export const VERTICAL_BRICK_S_HEIGHT = 30;
export const VERTICAL_BRICK_S_HEIGHT = FIELD_HEIGHT * 0.5;
export const VERTICAL_BRICK_M_HEIGHT = FIELD_HEIGHT * (2 / 3);
//export const VERTICAL_BRICK_M_HEIGHT = 40;
export const VERTICAL_BRICK_WIDTH = 0.5 * FIELD_WIDTH;

//HORIZONTAL BRICK
export const HORIZONTAL_BRICK_WIDTH = FIELD_WIDTH;
export const HORIZONTAL_BRICK_HEIGHT = FIELD_HEIGHT * (1 / 3);
export const BALL_SIZE = HORIZONTAL_BRICK_HEIGHT / 2; //10;
