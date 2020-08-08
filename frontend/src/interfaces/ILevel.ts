import { IField } from './IField';

export interface ILevel {
  hasDarkRedBall: boolean;
  hasIceBall: boolean;
  hasNeonBlueBall: boolean;
  ballStartFieldId: number;
  fields: IField[];
}
