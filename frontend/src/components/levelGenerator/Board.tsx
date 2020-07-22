import React from 'react';
import Background from '../../images/background.png';
import { BOARD_WIDTH, BOARD_HEIGHT } from './Constants';
import Fields from './Fields';

export default function Board() {
  return (
    <div
      style={{
        marginTop: '3rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${Background})`,
          height: `${BOARD_HEIGHT}px`,
          width: `${BOARD_WIDTH}px`,
        }}
      >
        <Fields />
      </div>
    </div>
  );
}
