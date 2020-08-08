import { IField } from './IField';

export interface ILevel {
  ballColor: string;
  ballStartFieldId: number;
  brick: string;
  rotatedBrick: string;
  boardBackground: string;
  frictionCoefficient: number;
  ballSpeedCoefficient: number;
  fields: IField[];
}
