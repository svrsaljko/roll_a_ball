import React from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import { isMobile } from 'react-device-detect';
import ReactMarkdown from 'react-markdown';
// import homePage from '../../README.md';

const playGame = () => {
  if (isMobile) {
    //promjena boje footera
    // const rootElement = document.getElementById('root');
    // console.log('root element: ', rootElement);
    // rootElement.style.backgroundColor = 'black';
    return <Game />;
  } else return <div>aaaa</div>;
};

export default function Home() {
  return (
    <div>
      <Header />
      {playGame()}
    </div>
  );
}
