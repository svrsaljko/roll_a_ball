import { IField } from '../interfaces/IField';

export const updateField = (field: IField, clickCounter: number): IField => {
  field.clickCounter = clickCounter;
  if (clickCounter === 0) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 1) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 2) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 3) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 4) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 5) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 6) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 7) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 8) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 9) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = true;
  } else if (clickCounter === 10) {
    field.topWall = true;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  }

  return field;
};
