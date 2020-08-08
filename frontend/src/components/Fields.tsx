import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  setAllFields,
  setBallStartFieldId,
  setBoardBackground,
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
  setBallStartFieldId(ballStartFieldId: number, ballColor: string): void;
  setBoardBackground(boardBackground: string): void;

  currentLevel: number;
  currentScore: number;
  levels: ILevel[];
}

function Fields(props: IProps) {
  const { setBallStartFieldId, setAllFields, setBoardBackground } = props;
  const {
    ballStartFieldId,
    ballColor,
    brick,
    rotatedBrick,
    boardBackground,
  } = props.levels[props.currentLevel - 1];
  setBoardBackground(boardBackground);
  setBallStartFieldId(ballStartFieldId, ballColor);
  const [fields, setFields] = useState(
    props.levels[props.currentLevel - 1].fields
  );
  const { currentScore } = props;
  useEffect(() => {
    setFields(props.levels[props.currentLevel - 1].fields);
  }, [props, currentScore]);
  setAllFields(props.levels[props.currentLevel - 1].fields);
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
  // console.log('redux state: ', state);
  // const fields: IField[] = state.fieldsReducer.fields;
  const currentLevel: number = state.levelReducer.currentLevel;
  const currentScore: number = state.scoreReducer.currentScore;
  return {
    // fields,
    currentLevel,
    currentScore,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAllFields: (fields: IField[]) => dispatch(setAllFields(fields)),
    setBallStartFieldId: (ballStartFieldId: number, ballColor: string) =>
      dispatch(setBallStartFieldId(ballStartFieldId, ballColor)),
    setBoardBackground: (boardBackground: string) =>
      dispatch(setBoardBackground(boardBackground)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels(Fields));
