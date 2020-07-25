import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Timer from '../components/Timer';
import { IRootReducer } from '../reducers/index';
import { setPauseMenuState } from '../actions/actions';

interface IProps {
  setPauseMenuState(): void;
  currentLevel: number;
  currentScore: number;
}

const onPauseClick = (setPauseMenuState: () => void) => {
  setPauseMenuState();
};

function GameFooter(props: IProps) {
  const { currentLevel, currentScore, setPauseMenuState } = props;

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
        <div style={{ marginTop: '5px' }}> LV: {currentLevel} </div>
      </div>
      <Timer />
      <div
        onClick={() => {
          onPauseClick(setPauseMenuState);
        }}
      >
        {/* <FontAwesomeIcon icon={faPauseCircle} size="2x" /> */}
        <FontAwesomeIcon icon={faPauseCircle} size="2x" />
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const currentLevel: number = state.levelReducer.currentLevel;
  const currentScore: number = state.scoreReducer.currentScore;
  return {
    currentLevel,
    currentScore,
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
