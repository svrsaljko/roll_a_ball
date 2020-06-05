import React from 'react';
import { BALL_SIZE, BOARD_WIDTH } from './Constants';

export default function Header() {
  return (
    <div
      style={{
        borderBottom: '3px solid black',
        backgroundColor: 'black',
        color: 'white',
        height: 'auto',
        width: `${BOARD_WIDTH}px`,
      }}
    >
      <div
        style={{
          padding: ` ${BALL_SIZE}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: ` ${2 * BALL_SIZE}px`,
          }}
        >
          R{' '}
          <div
            style={{
              height: `${2 * BALL_SIZE}px`,
              width: `${2 * BALL_SIZE}px`,
              backgroundColor: 'darkRed',
              borderRadius: '50%',
              display: 'inlin-block',
            }}
          >
            {' '}
          </div>
          LL A BALL{' '}
        </div>
      </div>
    </div>
  );
}
