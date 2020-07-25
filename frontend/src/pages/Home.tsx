import React from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import { isMobile } from 'react-device-detect';
import ReactMarkdown from 'react-markdown';
// import homePage from '../../README.md';

const markdown = `# Roll a ball

## Offline playing with the T-Rex gives a whole new dimension

## ... only on ROLL A BALL PWA

|                                                                   |                                                            |
| :---------------------------------------------------------------: | :--------------------------------------------------------: |
| ![NO-INTERNET-CONNECTION-T-REX](../../../readmeImages/roll_a_ball10.gif) | ![ROLL-A-BALL-T-REX-LV1](./readmeImages/roll_a_ball11.gif) |

## Tilt device in any direction

## Collect items!

## Enter hole for next level!

## Set new high score!!

|                                                                      |                                                                      |
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img  alt="roll-a-ball image" src="../../../readmeImages/roll_a_ball1.png"> | <img  alt="roll-a-ball image" src="./readmeImages/roll_a_ball2.png"> |
| <img  alt="roll-a-ball image" src="./readmeImages/roll_a_ball3.png"> | <img  alt="roll-a-ball image" src="./readmeImages/roll_a_ball4.png"> |

## Update coming soon !!
`;

const playGame = () => {
  if (isMobile) {
    //promjena boje footera
    // const rootElement = document.getElementById('root');
    // console.log('root element: ', rootElement);
    // rootElement.style.backgroundColor = 'black';
    return <Game />;
  } else return <ReactMarkdown source={markdown} />;
};

export default function Home() {
  return (
    <div>
      <Header />
      {playGame()}
    </div>
  );
}
