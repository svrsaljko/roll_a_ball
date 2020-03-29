import React from 'react';
import {
  BRICK_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BALL_SIZE
} from './Constants';

function Hole() {
  return (
    <div
      className="hole"
      style={{
        width: `${BALL_SIZE}px`,
        height: `${BALL_SIZE}px`,
        backgroundColor: '#000',
        borderRadius: '50%',
        position: 'absolute',
        top: `${BOARD_HEIGHT - BRICK_HEIGHT - BALL_SIZE - 3}px`,
        left: `${BOARD_WIDTH - BRICK_HEIGHT - BALL_SIZE - 3}px`
      }}
    ></div>
  );
}
export default Hole;
