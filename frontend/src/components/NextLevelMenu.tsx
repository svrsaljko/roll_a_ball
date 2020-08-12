import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setNextLevelMenuState, setCurrentLevel } from '../actions/actions';
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
  setNextLevelMenuState: (isNextLevelMenuActive: boolean) => void;
  setCurrentLevel: (currentLevel: number) => void;
}

function NextLevelMenu(props: IProps) {
  const {
    nextLevelMenuState,
    currentLevel,
    setNextLevelMenuState,
    setCurrentLevel,
  } = props;
  const level = currentLevel + 1;
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
        }}
      >
        NEXT LEVEL
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { currentLevel } = state.levelReducer;
  return { nextLevelMenuState, currentLevel };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setNextLevelMenuState: (isNextLevelMenuActive: boolean) =>
      dispatch(setNextLevelMenuState(isNextLevelMenuActive)),
    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevelMenu);
