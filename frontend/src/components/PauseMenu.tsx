import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import axios from 'axios';
import { ENEMIES } from '../items/Items';
import { uuid } from 'uuidv4';
import { getUsername } from '../service/authService';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  pauseMenuState: string;
}

const onSubmitScore = (currentScore: number) => {};

function PauseMenu(props: IProps) {
  const { pauseMenuState } = props;

  return (
    <div
      style={{
        display: `${pauseMenuState}`,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginTop: '3rem',
          color: 'darkRed',
        }}
      >
        GAME PAUSED
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          marginTop: `${BOARD_HEIGHT / 2}px`,
          marginLeft: `${BOARD_WIDTH / 3}px`,
        }}
      >
        {ENEMIES.map((enemy, i) => {
          return (
            <div
              key={uuid()}
              style={{
                position: 'absolute',
                marginLeft: `${3.35 * i}rem`,
              }}
            >
              {enemy}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { pauseMenuState } = state.pauseMenuReducer;
  return { pauseMenuState };
};

export default connect(mapStateToProps)(PauseMenu);
