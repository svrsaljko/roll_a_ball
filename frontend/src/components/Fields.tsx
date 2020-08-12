import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  setAllFields,
  setBallStartFieldId,
  setBoardBackground,
  setCurrentLevel,
} from '../actions/actions';
import { IRootReducer } from '../reducers';
import { FIELD_WIDTH, FIELD_HEIGHT } from './Constants';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';
import Walls from './Walls';
import { uuid } from 'uuidv4';
import Levels from '../hoc/Levels';

interface IProps {
  setAllFields(fields: IField[]): void;
  setBallStartFieldId(
    ballStartFieldId: number,
    ballColor: string,
    ballSpeedCoefficient: number
  ): void;
  setBoardBackground(
    boardBackground: string,
    frictionCoefficient: number
  ): void;

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
    setBallStartFieldId,
    setAllFields,
    setBoardBackground,
    nextLevelMenuState,
    frictionCoefficient,
  } = props;

  const { currentScore } = props;

  setAllFields(props.levels[props.currentLevel].fields);
  // setBoardBackground(boardBackground, frictionCoefficient);

  const [ballSpeedCoefficient, setBallSpeedCoefficient] = useState(
    props.levels[props.currentLevel].ballSpeedCoefficient
  );
  const [ballColor, setBallColor] = useState(
    props.levels[props.currentLevel].ballColor
  );
  const [ballStartFieldId, setBallStartFieldIdState] = useState(
    props.levels[props.currentLevel].ballStartFieldId
  );
  const [fields, setFields] = useState(() => {
    if (props.currentLevel <= 1) {
      return props.levels[props.currentLevel].fields;
    }
  });
  const [brick, setBrick] = useState(props.levels[props.currentLevel].brick);
  const [rotatedBrick, setRotatedBrick] = useState(
    props.levels[props.currentLevel].rotatedBrick
  );
  useEffect(() => {
    if (nextLevelMenuState === 'block' && props.currentLevel < 1) {
      setFields(props.levels[props.currentLevel + 1].fields);
      setAllFields(props.levels[props.currentLevel + 1].fields);
      setBrick(props.levels[props.currentLevel + 1].brick);
      setRotatedBrick(props.levels[props.currentLevel + 1].rotatedBrick);
      // let level = props.currentLevel;
      setBallColor(props.levels[props.currentLevel + 1].ballColor);
      setBallStartFieldIdState(
        props.levels[props.currentLevel + 1].ballStartFieldId
      );
      setBallSpeedCoefficient(
        props.levels[props.currentLevel + 1].ballSpeedCoefficient
      );
      setBallStartFieldId(ballStartFieldId, ballColor, ballSpeedCoefficient);
      // level = level + 1;
      // setCurrentLevel(level);
    }
  }, [nextLevelMenuState, props.currentLevel, currentScore]);

  // useEffect(() => {
  //   if (nextLevelMenuState === 'block') {
  //     console.log('postavi polja nacrtaj:', props.currentLevel + 1);
  //   }
  // }, [nextLevelMenuState]);

  return (
    <div>
      {props.currentLevel <= 1 ? (
        fields.map((field) => {
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
                border: '0.3px solid red',
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
        })
      ) : (
        <div>gotovo</div>
      )}
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
    setBallStartFieldId: (
      ballStartFieldId: number,
      ballColor: string,
      ballSpeedCoefficient: number
    ) =>
      dispatch(
        setBallStartFieldId(ballStartFieldId, ballColor, ballSpeedCoefficient)
      ),
    setBoardBackground: (
      boardBackground: string,
      frictionCoefficient: number
    ) => dispatch(setBoardBackground(boardBackground, frictionCoefficient)),
    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels(Fields));
