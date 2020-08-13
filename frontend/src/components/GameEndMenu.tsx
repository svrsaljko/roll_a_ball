import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setGameEndMenuState } from '../actions/actions';
import { IRootReducer } from '../reducers';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  gameEndMenuState: string;
  setGameEndMenuState: (isGameEndMenuActive: boolean) => void;
}

function GameEndMenu(props: IProps) {
  const { gameEndMenuState, setGameEndMenuState } = props;

  return (
    <div
      style={{
        display: `${gameEndMenuState}`,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,

        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      game end menu
      <button
        onClick={() => {
          setGameEndMenuState(false);
        }}
      >
        GAME_END
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { gameEndMenuState } = state.gameEndMenuReducer;
  return {
    gameEndMenuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setGameEndMenuState: (isGameEndMenuActive: boolean) =>
      dispatch(setGameEndMenuState(isGameEndMenuActive)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameEndMenu);
