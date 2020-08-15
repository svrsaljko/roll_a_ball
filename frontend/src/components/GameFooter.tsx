import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Timer from '../components/Timer';
import { IRootReducer } from '../reducers/index';
import { setPauseMenuState } from '../actions/actions';

interface IProps {
  setPauseMenuState(): void;
  currentLevel: number;
  currentScore: number;
  isGamePaused: boolean;
  nextLevelMenuState: string;
  startGameMenuState: string;
}

const onPauseClick = (setPauseMenuState: () => void) => {
  setPauseMenuState();
};

function GameFooter(props: IProps) {
  const {
    currentLevel,
    currentScore,
    isGamePaused,
    setPauseMenuState,
    nextLevelMenuState,
    startGameMenuState,
  } = props;

  return (
    <div
      style={{
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div> Score: {currentScore} </div>{' '}
        <div style={{ marginTop: '5px' }}> LV: {currentLevel + 1} </div>
      </div>
      <Timer />
      <div
        onClick={() => {
          onPauseClick(setPauseMenuState);
        }}
      >
        {nextLevelMenuState === 'none' && startGameMenuState === 'none' ? (
          <FontAwesomeIcon
            icon={isGamePaused ? faPlayCircle : faPauseCircle}
            size="2x"
          />
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const { currentLevel } = state.levelReducer;
  const { currentScore } = state.scoreReducer;
  const { isGamePaused } = state.pauseMenuReducer;
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { startGameMenuState } = state.startGameReducer;
  return {
    currentLevel,
    currentScore,
    isGamePaused,
    nextLevelMenuState,
    startGameMenuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPauseMenuState: () => {
      dispatch(setPauseMenuState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFooter);
