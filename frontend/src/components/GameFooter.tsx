import React, { useState } from 'react';
import PauseButton from '../images/pauseButton.png';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../reducers/index';

const onPauseClick = () => {
  console.log('pause button clicked! ');
};

function GameFooter(props: any) {
  console.log('GAME FOOTER props: ', props);
  //const [currentLevel, setCurrentLevel] = useState(1);
  //console.log('level: ', currentLevel);

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
        <div> Score: 100 </div>{' '}
        <div style={{ marginTop: '5px' }}> LV: {props.currentLevel} </div>
      </div>

      <div onClick={onPauseClick}>
        <img src={PauseButton} height="35px" width="35px" alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  //  const fields: IField[] = state.fieldsReducer.fields;
  const currentLevel: number = state.levelReducer.currentLevel;
  return {
    currentLevel,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     setCurrentLevel: (fields: IField[]) => dispatch(setAllFields(fields)),
//   };
// };

export default connect(mapStateToProps)(GameFooter);
