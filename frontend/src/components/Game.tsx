import React from 'react';
import Board from './Board';
import GameFooter from './GameFooter';
import PauseMenu from './PauseMenu';

export default function Game() {
  return (
    <div>
      <Board />

      {/* <PauseMenu /> */}

      <GameFooter />
    </div>
  );
}
