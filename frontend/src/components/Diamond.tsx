import React from 'react';
import { FIELD_WIDTH, FIELD_HEIGHT, BALL_SIZE } from './Constants';
import '../css/Diamond.css';

function Diamond() {
  return (
    <div
      style={{
        top: FIELD_HEIGHT * (1 / 3),
        left: FIELD_WIDTH * (1 / 4),
        position: 'absolute',
      }}
    >
      <div
        style={{
          borderWidth: `0 ${BALL_SIZE / 2}px ${BALL_SIZE / 2}px ${
            BALL_SIZE / 2
          }px`,

          width: `${BALL_SIZE}px`,
        }}
        className="Diamond"
      ></div>
      <div
        style={{
          borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
        }}
        className="DiamondAfter"
      ></div>
    </div>
  );
}

export default Diamond;
