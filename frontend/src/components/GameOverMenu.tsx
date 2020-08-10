import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setGameOverMenuState } from '../actions/actions';
import { IRootReducer } from '../reducers';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  gameOverMenuState: string;
  setGameOverMenuState: (gameOverMenuState: boolean) => void;
}

function GameOverMenu(props: IProps) {
  const { gameOverMenuState, setGameOverMenuState } = props;
  return (
    <div
      style={{
        // display: 'block',
        display: `${gameOverMenuState}`,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,

        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      game over menu state
      <button
        onClick={() => {
          setGameOverMenuState(false);
        }}
      >
        exit
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { gameOverMenuState } = state.gameOverMenuReducer;

  return { gameOverMenuState };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setGameOverMenuState: (isGameOverMenuActive: boolean) =>
      dispatch(setGameOverMenuState(isGameOverMenuActive)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOverMenu);
