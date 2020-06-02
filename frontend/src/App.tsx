import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  console.log('Mobile device to pixel ratio: ', window.devicePixelRatio);
  console.log('Mobile device outer width: ', window.outerWidth);
  console.log('Mobile device outer height: ', window.outerHeight);
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
