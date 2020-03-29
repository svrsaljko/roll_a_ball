import React from 'react';
import ball from '../images/ball.png';
const BALL_SIZE = 20;

export default function Ball(props) {
  const { positionX, positionY } = props;
  return (
    <img
      src={ball}
      alt="ball"
      style={{
        width: `${BALL_SIZE}px`,
        height: `${BALL_SIZE}px`,

        position: 'absolute',
        top: `${positionY}px`,
        left: `${positionX}px`
      }}
    />
  );
}
