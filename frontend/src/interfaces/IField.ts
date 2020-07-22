export interface IField {
  top: number;
  left: number;
  topWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
  leftWall: boolean;
  hasHole: boolean;
  hasDiamond: boolean;
  fieldId: number;
  leftFieldId: number | null;
  rightFieldId: number | null;
  topFieldId: number | null;
  bottomFieldId: number | null;
  clickCounter?: number;
}
