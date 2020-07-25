import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';

interface IProps {
  isGamePaused: boolean;
}

interface IState {
  timerState: number;
  timerStart: boolean;
}

const SECOND = 1000;
const COUNTDOWN_TIMER = 10;

class Timer extends Component<IProps> {
  state: IState = { timerState: COUNTDOWN_TIMER, timerStart: false };

  returnGamePauseState = () => {
    if (this.props.isGamePaused === undefined) {
      return false;
    } else return this.props.isGamePaused;
  };

  timerCall = () => {
    console.log('timer call');

    let countdown = this.state.timerState;
    let doEachInterval = () => {
      console.log('countdown: ', countdown);
      countdown = countdown - 1;

      if (countdown === 0 || this.returnGamePauseState()) {
        clearInterval(timer);
        this.setState({ timerStart: true });
        console.log('clear timer');
      }

      this.setState({ timerState: countdown });
    };
    let timer = setInterval(doEachInterval, SECOND);
  };
  componentDidUpdate(prevProps: IProps) {
    console.log('prevProps: ', prevProps.isGamePaused);
    console.log('currentProps: ', this.props.isGamePaused);

    if (this.state.timerStart) {
      if (
        prevProps.isGamePaused === true &&
        this.props.isGamePaused === false
      ) {
        console.log('OPET PODESI TIMER');
        this.timerCall();
      }
    }
  }

  componentDidMount() {
    this.timerCall();
  }

  render() {
    const { timerState } = this.state;

    return <div> {timerState} </div>;
  }
}

const mapStateToProps = (state: IRootReducer) => {
  const isGamePaused: boolean = state.pauseMenuReducer.isGamePaused;
  return {
    isGamePaused,
  };
};

export default connect(mapStateToProps)(Timer);
