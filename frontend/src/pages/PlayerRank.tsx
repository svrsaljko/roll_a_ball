import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { IScoreBoard } from '../interfaces/IScoreBoard';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { uuid } from 'uuidv4';

import { getUsername } from '../service/authService';
import { URL_GET_SCOREBOARD } from '../components/Constants';
import '../css/SignIn.css';

const getScoreBoard = (setScoreBoard: (scoreBoard: any) => void) => {
  axios
    .get(URL_GET_SCOREBOARD)
    .then((res) => {
      setScoreBoard(res.data);
    })
    .catch((err) => {
      setScoreBoard(null);
    });
};

const showScoreBoard = (scoreBoard: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {scoreBoard.map((userScore: any, i: number) => {
        return (
          <div
            key={uuid()}
            style={{
              display: 'flex',
              flexDirection: 'row',
              color: `${
                userScore.userName === getUsername() ? 'darkRed' : 'black'
              }`,
            }}
          >
            <div style={{ marginRight: '3rem' }}>
              {i >= 9 ? (
                <div> {userScore.rank} </div>
              ) : (
                <div>&nbsp;&nbsp;{userScore.rank} </div>
              )}
            </div>
            <div style={{ minWidth: '20rem' }}>{userScore.userName}</div>
            <div>{userScore.highscore}</div>
          </div>
        );
      })}
    </div>
  );
};

function PlayerRank() {
  const [scoreBoard, setScoreBoard] = useState(null);
  useEffect(() => {
    console.log('score board', getScoreBoard(setScoreBoard));
  }, []);
  console.log('score board: ', scoreBoard);
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '5rem',
          fontSize: '2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {scoreBoard === undefined || scoreBoard === null ? (
            <div> SCORE BOARD LOADING</div>
          ) : (
            <div> {showScoreBoard(scoreBoard)} </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default PlayerRank;
