import React from 'react';
const SQUARE_SIZE = 30;

export default function Square(props) {
  const { top, left } = props;
  return (
    <div
      style={{
        width: `${SQUARE_SIZE}px`,
        height: `${SQUARE_SIZE}px`,
        border: '3px solid blue',
        background: 'blue',
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`
      }}
      className="square"
    ></div>
  );
}
