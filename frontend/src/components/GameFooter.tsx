import React from 'react';
import PauseButton from '../images/pauseButton.png';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers/index';

const onPauseClick = () => {
  console.log('pause button clicked! ');
};

function GameFooter() {
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
        <div> Score: 100 </div> <div style={{ marginTop: '5px' }}> LV: 1 </div>
      </div>

      <div onClick={onPauseClick}>
        <img src={PauseButton} height="35px" width="35px" alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  //  const fields: IField[] = state.fieldsReducer.fields;
  return {
    //  fields,
  };
};

export default connect(mapStateToProps)(GameFooter);
