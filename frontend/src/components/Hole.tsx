import React from 'react';
import { BALL_SIZE, FIELD_HEIGHT, FIELD_WIDTH } from './Constants';

const BACKROUND_COLOR = 'white';

function Hole() {
  return (
    <div style={{ position: 'absolute' }}>
      <div
        style={{
          width: `${BALL_SIZE * 2.3}px`,
          height: `${BALL_SIZE * 2.3}px`,
          backgroundColor: `${BACKROUND_COLOR}`,
          position: 'relative',
          borderRadius: '50%',
          top: FIELD_HEIGHT / 2,
          left: FIELD_WIDTH / 4,
        }}
      ></div>
    </div>
  );
}

export default Hole;
