import React from 'react';
import { BALL_SIZE, FIELD_HEIGHT, FIELD_WIDTH } from './Constants';

function Hole() {
  return (
    <div style={{ position: 'absolute' }}>
      <div
        style={{
          width: `${BALL_SIZE}px`,
          height: `${BALL_SIZE}px`,
          backgroundColor: 'black',
          position: 'relative',
          borderRadius: `0 0  ${BALL_SIZE}px 0 `,
          top: FIELD_HEIGHT / 2,
          left: FIELD_WIDTH / 2,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${-BALL_SIZE}px`,
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'black',

            borderRadius: `0   ${BALL_SIZE}px 0 0 `,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-BALL_SIZE}px`,
            top: `${-BALL_SIZE}px`,
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'black',

            borderRadius: `  ${BALL_SIZE}px 0 0 0 `,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-BALL_SIZE}px`,

            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'black',

            borderRadius: `0 0 0  ${BALL_SIZE}px  `,
          }}
        />
      </div>
    </div>
  );
}

export default Hole;
