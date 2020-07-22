import React from 'react';
import Board from './Board';

export default function CenterContainer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Board />
    </div>
  );
}
