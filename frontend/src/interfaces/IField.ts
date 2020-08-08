export interface IField {
  top: number;
  left: number;
  topWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
  leftWall: boolean;
  fieldId: number;
  leftFieldId: number | null;
  rightFieldId: number | null;
  topFieldId: number | null;
  bottomFieldId: number | null;
  clickCounter?: number;

  // BALL
  hasDarkRedBall?: boolean;
  hasIceBall?: boolean;
  hasNeonBlueBall?: boolean;
  // DOOR
  hasBlackDoor?: boolean;
  hasGoldDoor?: boolean;
  hasIceDoor?: boolean;
  // ITEMS
  hasGold?: boolean;
  hasSilver?: boolean;
  hasDiamond?: boolean;
  hasEmerald?: boolean;
  hasSapphire?: boolean;
  hasRuby?: boolean;
  // ENEMY
  hasNeonRedEnemy?: boolean;
  hasNeonGreenEnemy?: boolean;
  hasNeonBlueEnemy?: boolean;
}
