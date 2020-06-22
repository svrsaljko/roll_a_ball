import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setAllFields } from '../actions/actions';
import { IRootReducer } from '../reducers';
import { FIELD_WIDTH, FIELD_HEIGHT } from './Constants';
import { IField } from '../interfaces/IField';
import Walls from './Walls';
import { uuid } from 'uuidv4';
import Levels from '../hoc/Levels';

interface IProps {
  setAllFields(fields: IField[]): void;
  currentLevel: number;
  currentScore: number;
  levels: IField[][];
}

function Fields(props: IProps) {
  const [fields, setFields] = useState(props.levels[props.currentLevel - 1]);
  const { currentScore } = props;
  useEffect(() => {
    // console.log('primljeni level s redux-a ', props.currentLevel);
    setFields(props.levels[props.currentLevel - 1]);
    // console.log('šalji polja na redux');
    // props.setAllFields(props.levels[props.currentLevel - 1]);
  }, [props, currentScore]);
  props.setAllFields(props.levels[props.currentLevel - 1]);
  // console.log('FIELDS props: ', props.levels);
  return (
    <div>
      {fields.map((field) => {
        let {
          top,
          left,
          topWall,
          bottomWall,
          rightWall,
          leftWall,
          hasHole,
          hasDiamond,
        } = field;
        //console.log('hasHole, ', hasHole);
        return (
          <div
            key={uuid()}
            style={{
              // border: '0.3px solid red',
              width: `${FIELD_WIDTH}px`,
              height: `${FIELD_HEIGHT}px`,
              top: `${top}px`,
              left: `${left}px`,
              position: 'absolute',
            }}
          >
            <Walls
              topWall={topWall}
              bottomWall={bottomWall}
              rightWall={rightWall}
              leftWall={leftWall}
              hasHole={hasHole}
              hasDiamond={hasDiamond}
            />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  // console.log('redux state: ', state);
  // const fields: IField[] = state.fieldsReducer.fields;
  const currentLevel: number = state.levelReducer.currentLevel;
  const currentScore: number = state.scoreReducer.currentScore;
  return {
    // fields,
    currentLevel,
    currentScore,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAllFields: (fields: IField[]) => dispatch(setAllFields(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels(Fields));
