import React from 'react';
import ball from '../images/ball.png';
const BALL_SIZE = 10;

export default function Ball(props) {
  const { positionX, positionY } = props;
  return (
    <div style={{ position: 'absolute' }}>
      <div
        style={{
          width: `${BALL_SIZE}px`,
          height: `${BALL_SIZE}px`,
          backgroundColor: 'darkRed',
          position: 'relative',
          borderRadius: `0 0  ${BALL_SIZE}px 0 `,

          top: `${positionY}px`,
          left: `${positionX}px`
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${-BALL_SIZE}px`,
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'darkRed',

            borderRadius: `0   ${BALL_SIZE}px 0 0 `
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-BALL_SIZE}px`,
            top: `${-BALL_SIZE}px`,
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'darkRed',

            borderRadius: `  ${BALL_SIZE}px 0 0 0 `
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-BALL_SIZE}px`,

            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: 'darkRed',

            borderRadius: `0 0 0  ${BALL_SIZE}px  `
          }}
        />
      </div>
    </div>
  );
}

/*    <img
      src={ball}
      alt="ball"
      style={{
        width: `${BALL_SIZE}px`,
        height: `${BALL_SIZE}px`,

        position: 'absolute',
        top: `${positionY}px`,
        left: `${positionX}px`
      }}
    />*/
