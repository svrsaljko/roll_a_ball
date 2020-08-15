import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setStartGameState, setStartGameMenuState } from '../actions/actions';
import { IRootReducer } from '../reducers';
import { levels } from '../hoc/Levels';

import { ITEMS, DOORS, ENEMIES } from '../items/Items';
import { uuid } from 'uuidv4';
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
        style={{ marginLeft: '3rem', marginTop: '3rem', marginBottom: '1rem' }}
      >
        {' '}
        TILT DEVICE IN ANY DIRECTION!!
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: '1px solid white',
          marginLeft: '3rem',
          marginRight: '3rem',
        }}
      >
        <div style={{}}>
          <div>COLLECT ITEMS!</div>
          {ITEMS.map((item) => {
            return (
              <div
                key={uuid()}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '1rem',
                }}
              >
                <div style={{ minWidth: '6.5rem' }}> {item.title} </div>
                <div style={{ minWidth: '2rem', marginRight: '1rem' }}>
                  {item.item}
                </div>
                {item.points}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            ENTER DOORS!
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              {DOORS.map((door, i) => {
                return (
                  <div
                    style={{ marginLeft: ` ${i !== 0 ? '1.5rem' : 'none'} ` }}
                    key={uuid()}
                  >
                    {door}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '3.15rem ',
            }}
          >
            AVOID ENEMIES!
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1.5rem',
                marginLeft: '1rem',
              }}
            >
              {ENEMIES.map((enemy, i) => {
                return (
                  <div
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
        </div>
      </div>

      <div style={{ marginLeft: '3rem', marginTop: '0.5rem' }}>
        <div
          style={{
            fontWeight: 'bold',
          }}
        >
          LEVEL 1
        </div>
        <div
          style={{
            color: 'darkRed',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: '2rem',
          }}
        >
          {levels[0].levelName}
        </div>
        <div style={{ marginTop: '2rem' }}>wall type: {levels[0].wallName}</div>
        <div> field type: {levels[0].boardName}</div>
        <div>field friction coefficient: {levels[0].frictionCoefficient}</div>
        <div style={{ marginTop: '2rem' }}> PLAYER </div>
        <div
          style={{ backgroundColor: levels[0].ballColor }}
          className="header-container-element-ball"
        ></div>
        <div>player speed coefficient: {levels[0].ballSpeedCoefficient}</div>
      </div>
      <button
        onClick={() => {
          setStartGameState(true);
          setStartGameMenuState('none');
        }}
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
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
