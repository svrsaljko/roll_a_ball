import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { setGameEndMenuState, setUserHighscore } from '../actions/actions';
import { IRootReducer } from '../reducers';
import { isSignedIn, getUsername } from '../service/authService';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
  URL_GET_USER_HIGHSCORE,
  URL_PATCH_USER_HIGHSCORE,
} from '../components/Constants';
import { TRexNoConnection } from '../images';

interface IProps {
  gameEndMenuState: string;
  currentScore: number;
  userHighscore: number;
  history: any;
  currentTime: number;
  currentLevel: number;
  setUserHighscore: (userHighscore: number) => void;
}

const patchUserHighscore = (newScore: number) => {
  const user: any = {
    userName: `${getUsername()}`,
    highscore: newScore,
  };

  return axios.patch(URL_PATCH_USER_HIGHSCORE, user);
};

const getUserHighScore = () => {
  return axios.get(URL_GET_USER_HIGHSCORE);
};

function GameEndMenu(props: IProps) {
  const {
    gameEndMenuState,
    currentScore,
    userHighscore,
    history,
    currentTime,
    currentLevel,
    setUserHighscore,
  } = props;

  const level = currentLevel + 1;
  const timerScore = currentTime * level * 2330;
  const newScore = currentScore + timerScore;

  if (
    userHighscore < newScore &&
    gameEndMenuState === 'flex' &&
    isSignedIn() &&
    navigator.onLine
  ) {
    patchUserHighscore(newScore)
      .then(getUserHighScore)
      .then((res) => {
        setUserHighscore(res.data);
      });
  }
  const highscoreStatus = () => {
    if (!navigator.onLine) {
      return (
        <div>
          <div>
            <div>No internet connection!</div>
            <img
              height="200rem"
              width="150rem"
              src={TRexNoConnection}
              alt="t-rex"
            />
            <div>Play online to </div>
            <div> beat the highscore! </div>
          </div>
        </div>
      );
    } else if (navigator.onLine && !isSignedIn()) {
      return (
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Link style={{ color: 'white', fontSize: '2rem' }} to="/signin">
              SIGN IN
            </Link>
          </div>

          <div> to beat the high score!</div>
        </div>
      );
    } else if (navigator.onLine && isSignedIn()) {
      if (newScore === userHighscore) {
        return (
          <div
            style={{
              fontSize: '2.5rem',
            }}
          >
            <span
              style={{
                color: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              NEW HIGHSCORE
            </span>
            <span
              style={{
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {userHighscore}
            </span>
          </div>
        );
      } else if (newScore < userHighscore)
        return (
          <div style={{ fontSize: '2rem' }}>HIGHSCORE: {userHighscore}</div>
        );
    } else return <div></div>;
  };

  return (
    <div
      style={{
        display: `${gameEndMenuState}`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,
        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
        fontSize: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginTop: '3rem',
          color: 'darkRed',
        }}
      >
        THE END
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div>
          <div>current score: {currentScore}</div>
          <div>+</div>
          <div
            style={{
              borderBottom: '1px solid white',
            }}
          >
            time score: {timerScore}
          </div>
          <div style={{ color: 'darkRed' }}>total score: {newScore}</div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {highscoreStatus()}
      </div>

      <button
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
        }}
        onClick={() => {
          history.push('/');
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { gameEndMenuState } = state.gameEndMenuReducer;
  const { currentScore } = state.scoreReducer;
  const { userHighscore } = state.userHighscoreReducer;
  const { currentTime } = state.timerReducer;
  const { currentLevel } = state.levelReducer;

  return {
    gameEndMenuState,
    currentScore,
    userHighscore,
    currentTime,
    currentLevel,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserHighscore: (userHighscore: number) =>
      dispatch(setUserHighscore(userHighscore)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GameEndMenu)
);
