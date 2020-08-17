import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentTime } from '../actions/actions';
import { IRootReducer } from '../reducers';
import { START_TIME } from '../components/Constants';
const SECOND = 1000;

interface IProps {
  currentTime: number;
  isGamePaused: boolean;
  currentLevel: number;
  setCurrentTime: (currentTime: number) => void;
  nextLevelMenuState: string;
  startGame: boolean;
  gameOverMenuState: string;
}

class Timer extends Component<IProps> {
  timerCall = () => {
    let doEachInterval = () => {
      const {
        currentTime,
        setCurrentTime,
        isGamePaused,
        nextLevelMenuState,
        gameOverMenuState,
      } = this.props;

      if (isGamePaused) {
        clearInterval(timer);
      } else if (
        nextLevelMenuState === 'flex' ||
        gameOverMenuState === 'flex'
      ) {
        clearInterval(timer);
      } else if (currentTime === 0) {
        clearInterval(timer);
      } else {
        setCurrentTime(currentTime - 1);
      }
    };
    let timer: any;

    timer = setInterval(doEachInterval, SECOND);
  };

  componentDidUpdate(prevProps: IProps) {
    const {
      isGamePaused,
      currentLevel,
      setCurrentTime,
      startGame,
    } = this.props;

    if (prevProps.startGame === false && startGame === true) {
      this.timerCall();
    }

    if (prevProps.isGamePaused === true && isGamePaused === false) {
      this.timerCall();
    }

    if (prevProps.currentLevel === currentLevel - 1) {
      setCurrentTime(START_TIME);
      this.timerCall();
    }
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div style={{ color: `${currentTime > 10 ? 'white' : 'red'}` }}>
        {currentTime}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer) => {
  const { currentTime } = state.timerReducer;
  const { currentLevel } = state.levelReducer;
  const { isGamePaused } = state.pauseMenuReducer;
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { startGame } = state.startGameReducer;
  const { gameOverMenuState } = state.gameOverMenuReducer;
  return {
    currentTime,
    isGamePaused,
    currentLevel,
    nextLevelMenuState,
    startGame,
    gameOverMenuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentTime: (currentTime: number) =>
      dispatch(setCurrentTime(currentTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
