import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  pauseMenuState: string;
}

function PauseMenu(props: IProps) {
  const { pauseMenuState } = props;
  console.log('props. ', props);

  return (
    <div
      style={{
        display: `${pauseMenuState}`,
        backgroundColor: 'white',
        position: 'fixed',
        marginTop: `-${BOARD_HEIGHT - HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,
        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      {' '}
      pause menu{' '}
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const pauseMenuState: string = state.pauseMenuReducer.pauseMenuState;
  return { pauseMenuState };
};

export default connect(mapStateToProps)(PauseMenu);
