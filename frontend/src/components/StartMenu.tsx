import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setStartGameState, setStartGameMenuState } from '../actions/actions';
import { IRootReducer } from '../reducers';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  setStartGameState: (startGame: boolean) => void;
  setStartGameMenuState: (startGameMenuState: string) => void;
  startGameMenuState: string;
}

function StartMenu(props: IProps) {
  const {
    setStartGameState,
    startGameMenuState,
    setStartGameMenuState,
  } = props;

  return (
    <div
      style={{
        display: `${startGameMenuState}`,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,

        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      start menu
      <button
        onClick={() => {
          setStartGameState(true);
          setStartGameMenuState('none');
        }}
      >
        START GAME
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { startGameMenuState } = state.startGameReducer;
  return { startGameMenuState };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setStartGameState: (startGame: boolean) =>
      dispatch(setStartGameState(startGame)),
    setStartGameMenuState: (startGameMenuState: string) =>
      dispatch(setStartGameMenuState(startGameMenuState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
