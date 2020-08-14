import { IField } from './IField';

export interface ILevel {
  levelName: string;
  wallName: string;
  boardName: string;
  ballColor: string;
  ballStartFieldId: number;
  brick: string;
  rotatedBrick: string;
  boardBackground: string;
  frictionCoefficient: number;
  ballSpeedCoefficient: number;
  fields: IField[];
}
