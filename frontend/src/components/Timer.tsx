import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentTime } from '../actions/actions';
import { IRootReducer } from '../reducers';

const SECOND = 1000;

interface IProps {
  currentTime: number;
  isGamePaused: boolean;
  currentLevel: number;
  setCurrentTime: (currentTime: number) => void;
  nextLevelMenuState: string;
  startGame: boolean;
}

class Timer extends Component<IProps> {
  timerCall = () => {
    let doEachInterval = () => {
      const {
        currentTime,
        setCurrentTime,
        isGamePaused,
        nextLevelMenuState,
      } = this.props;

      if (isGamePaused) {
        clearInterval(timer);
      } else if (nextLevelMenuState === 'block') {
        clearInterval(timer);
        // console.log('next level destroy timer');
      } else if (currentTime === 0) {
        clearInterval(timer);
      } else {
        setCurrentTime(currentTime - 1);
      }
    };
    // console.log('timer created');
    let timer: any;

    timer = setInterval(doEachInterval, SECOND);
  };

  // componentDidMount() {
  //   console.log('cdm');
  //   if (this.props.startGame) {
  //     this.timerCall();
  //   }
  // }

  componentDidUpdate(prevProps: IProps) {
    const {
      isGamePaused,
      currentLevel,
      setCurrentTime,
      startGame,
    } = this.props;
    console.log('this.props.startGame: ', startGame);
    if (prevProps.startGame === false && startGame === true) {
      console.log('timer call');
      this.timerCall();
    }

    if (prevProps.isGamePaused === true && isGamePaused === false) {
      this.timerCall();
    }

    if (prevProps.currentLevel === currentLevel - 1) {
      setCurrentTime(10);
      this.timerCall();
    }
  }

  render() {
    const { currentTime } = this.props;

    return <div>{currentTime}</div>;
  }
}

const mapStateToProps = (state: IRootReducer) => {
  const { currentTime } = state.timerReducer;
  const { currentLevel } = state.levelReducer;
  const { isGamePaused } = state.pauseMenuReducer;
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { startGame } = state.startGameReducer;
  return {
    currentTime,
    isGamePaused,
    currentLevel,
    nextLevelMenuState,
    startGame,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentTime: (currentTime: number) =>
      dispatch(setCurrentTime(currentTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
