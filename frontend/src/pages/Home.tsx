import React from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import { isMobile } from 'react-device-detect';
import ReactMarkdown from 'react-markdown';

const playGame = () => {
  if (isMobile) {
    //promjena boje footera
    // const rootElement = document.getElementById('root');
    // console.log('root element: ', rootElement);
    // rootElement.style.backgroundColor = 'black';
    return <Game />;
  } else return <div>{noPlayGame()}</div>;
};

const noPlayGame = () => {
  return <div>HOME</div>;
};

export default function Home() {
  return (
    <div>
      <Header />
      {playGame()}
    </div>
  );
}
