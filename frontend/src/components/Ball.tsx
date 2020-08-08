import React from 'react';
import { BALL_SIZE } from './Constants';

interface IProps {
  positionX: number;
  positionY: number;
  color: string;
}

export default function Ball(props: IProps) {
  const { positionX, positionY, color } = props;
  return (
    <div style={{ position: 'absolute' }}>
      <div
        style={{
          width: `${BALL_SIZE}px`,
          height: `${BALL_SIZE}px`,
          backgroundColor: `${color}`,
          position: 'relative',
          borderRadius: `0 0  ${BALL_SIZE}px 0 `,

          top: `${positionY}px`,
          left: `${positionX}px`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${-BALL_SIZE}px`,
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: `${color}`,

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
            backgroundColor: `${color}`,

            borderRadius: `  ${BALL_SIZE}px 0 0 0 `,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-BALL_SIZE}px`,

            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            backgroundColor: `${color}`,

            borderRadius: `0 0 0  ${BALL_SIZE}px  `,
          }}
        />
      </div>
    </div>
  );
}
