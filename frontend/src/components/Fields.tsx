import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setAllFields } from '../actions/actions';
import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  FIELD_WIDTH,
  FIELD_HEIGHT,
} from './Constants';
import { IField } from '../interfaces/IField';
import Walls from './Walls';
import { uuid } from 'uuidv4';
import Levels from '../hoc/Levels';

interface IProps {
  setAllFields(fields: IField[]): void;
  fields: IField[];
}

function Fields(props: IProps) {
  const [fields, setFields] = useState(props.fields);

  useEffect(() => {
    setFields(fields);
    props.setAllFields(fields);
  }, [fields, props]);

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
        } = field;
        //console.log('hasHole, ', hasHole);
        return (
          <div
            key={uuid()}
            style={{
              //border: '0.3px solid red',
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
            />
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAllFields: (fields: IField[]) => dispatch(setAllFields(fields)),
  };
};

export default connect(null, mapDispatchToProps)(Levels(Fields));
