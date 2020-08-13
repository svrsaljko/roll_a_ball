import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  setNextLevelMenuState,
  setCurrentLevel,
  setScore,
} from '../actions/actions';
import { IRootReducer } from '../reducers';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

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
  return (
    <div
      style={{
        display: `${nextLevelMenuState}`,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,

        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      nextLevelMenuState menu
      <button
        onClick={() => {
          setNextLevelMenuState(false);
          setCurrentLevel(level);
          setScore(currentScore + timerScore);
        }}
      >
        NEXT LEVEL
      </button>
      <div> items score: {currentScore} </div>
      <div>+</div>
      <div>timer score: {timerScore}</div>
      <div>=</div>
      <div>{currentScore + timerScore}</div>
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
