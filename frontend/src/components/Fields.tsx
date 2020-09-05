import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setAllFields, setCurrentLevel } from '../actions/actions';
import { IRootReducer } from '../reducers';
import { FIELD_WIDTH, FIELD_HEIGHT } from './Constants';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';
import Walls from './Walls';
import { v4 as uuid } from 'uuid';
import Levels from '../hoc/Levels';

interface IProps {
  setAllFields(fields: IField[]): void;
  setCurrentLevel: (currentLevel: number) => void;
  frictionCoefficient: number;
  ballSpeedCoefficient: number;
  currentLevel: number;
  currentScore: number;
  nextLevelMenuState: string;
  levels: ILevel[];
}

function Fields(props: IProps) {
  const {
    setAllFields,
    levels,
    currentLevel,
    nextLevelMenuState,
    currentScore,
  } = props;

  setAllFields(levels[currentLevel].fields);

  const [fields, setFields] = useState(levels[currentLevel].fields);
  const [brick, setBrick] = useState(levels[currentLevel].brick);
  const [rotatedBrick, setRotatedBrick] = useState(
    levels[currentLevel].rotatedBrick
  );
  useEffect(() => {
    if (nextLevelMenuState === 'flex') {
      setFields(levels[currentLevel + 1].fields);
      setAllFields(levels[currentLevel + 1].fields);
      setBrick(levels[currentLevel + 1].brick);
      setRotatedBrick(levels[currentLevel + 1].rotatedBrick);
    }
  }, [nextLevelMenuState, currentLevel, currentScore, levels, setAllFields]);

  return (
    <div>
      {fields.map((field) => {
        let {
          top,
          left,
          topWall,
          bottomWall,
          rightWall,
          leftWall,
          // BALL
          hasDarkRedBall,
          hasIceBall,
          hasNeonBlueBall,
          // DOOR
          hasBlackDoor,
          hasGoldDoor,
          hasIceDoor,
          // ITEMS
          hasGold,
          hasSilver,
          hasDiamond,
          hasEmerald,
          hasSapphire,
          hasRuby,
          // ENEMY
          hasNeonRedEnemy,
          hasNeonGreenEnemy,
          hasNeonBlueEnemy,
        } = field;

        return (
          <div
            key={uuid()}
            style={{
              // border: '0.3px solid red',
              width: `${FIELD_WIDTH}px`,
              height: `${FIELD_HEIGHT}px`,
              top: `${top}px`,
              left: `${left}px`,
              position: 'absolute',
            }}
          >
            <Walls
              brick={brick}
              rotatedBrick={rotatedBrick}
              //WALL
              topWall={topWall}
              bottomWall={bottomWall}
              rightWall={rightWall}
              leftWall={leftWall}
              // BALL
              hasDarkRedBall={hasDarkRedBall}
              hasIceBall={hasIceBall}
              hasNeonBlueBall={hasNeonBlueBall}
              // DOOR
              hasBlackDoor={hasBlackDoor}
              hasGoldDoor={hasGoldDoor}
              hasIceDoor={hasIceDoor}
              // ITEMS
              hasGold={hasGold}
              hasSilver={hasSilver}
              hasDiamond={hasDiamond}
              hasEmerald={hasEmerald}
              hasSapphire={hasSapphire}
              hasRuby={hasRuby}
              // ENEMY
              hasNeonRedEnemy={hasNeonRedEnemy}
              hasNeonGreenEnemy={hasNeonGreenEnemy}
              hasNeonBlueEnemy={hasNeonBlueEnemy}
            />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const { currentLevel } = state.levelReducer;
  const { currentScore } = state.scoreReducer;
  const { nextLevelMenuState } = state.nextLevelMenuReducer;

  return {
    currentLevel,
    currentScore,
    nextLevelMenuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAllFields: (fields: IField[]) => dispatch(setAllFields(fields)),

    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels(Fields));
