import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  setNextLevelMenuState,
  setCurrentLevel,
  setScore,
} from '../actions/actions';
import { IRootReducer } from '../reducers';
import { levels } from '../hoc/Levels';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

import '../css/Header.css';

interface IProps {
  nextLevelMenuState: string;
  currentLevel: number;
  currentTime: number;
  currentScore: number;
  setNextLevelMenuState: (isNextLevelMenuActive: boolean) => void;
  setCurrentLevel: (currentLevel: number) => void;
  setScore: (newScore: number) => void;
}

function NextLevelMenu(props: IProps) {
  const {
    nextLevelMenuState,
    currentLevel,
    currentTime,
    currentScore,
    setNextLevelMenuState,
    setCurrentLevel,
    setScore,
  } = props;
  const level = currentLevel + 1;
  const timerScore = currentTime * level * 2330;
  const nextLevelIndex =
    currentLevel + 1 > levels.length - 1 ? levels.length - 1 : currentLevel + 1;
  return (
    <div
      style={{
        display: `${nextLevelMenuState}`,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        color: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,
        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
        fontSize: '1.5rem',
      }}
    >
      <div style={{ marginLeft: '3rem' }}>
        <div>current score: {currentScore}</div>
        <div>+</div>
        <div
          style={{
            borderBottom: '1px solid white',

            marginRight: '3rem',
          }}
        >
          time score: {timerScore}
        </div>
        <div style={{ color: 'darkRed' }}>
          total score: {currentScore + timerScore}{' '}
        </div>
      </div>
      <div
        style={{
          margin: '3rem',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
          }}
        >
          LEVEL {currentLevel + 2}
        </div>
        <div
          style={{
            color: 'darkRed',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: '2rem',
          }}
        >
          {levels[nextLevelIndex].levelName}
        </div>
        <div style={{ marginTop: '2rem' }}>
          wall type: {levels[nextLevelIndex].wallName}
        </div>
        <div> field type: {levels[nextLevelIndex].boardName}</div>
        <div>
          field friction coefficient:{' '}
          {levels[nextLevelIndex].frictionCoefficient}
        </div>
        <div style={{ marginTop: '2rem' }}> PLAYER </div>
        <div
          style={{ backgroundColor: levels[nextLevelIndex].ballColor }}
          className="header-container-element-ball"
        ></div>
        <div>
          player speed coefficient:{' '}
          {levels[nextLevelIndex].ballSpeedCoefficient}
        </div>
      </div>
      <button
        onClick={() => {
          setNextLevelMenuState(false);
          setCurrentLevel(level);
          setScore(currentScore + timerScore);
        }}
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
          margin: '3rem',
        }}
      >
        NEXT LEVEL
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { currentScore } = state.scoreReducer;
  const { currentLevel } = state.levelReducer;
  const { currentTime } = state.timerReducer;
  return { nextLevelMenuState, currentLevel, currentTime, currentScore };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setNextLevelMenuState: (isNextLevelMenuActive: boolean) =>
      dispatch(setNextLevelMenuState(isNextLevelMenuActive)),
    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
    setScore: (newScore: number) => dispatch(setScore(newScore)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevelMenu);
