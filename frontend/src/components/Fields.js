import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAllFields } from '../actions/actions';
import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  FIELD_WIDTH,
  FIELD_HEIGHT,
} from './Constants';

import Walls from './Walls';
import { uuid } from 'uuidv4';

const initializeLevel = () => {
  let fields = [];
  let fieldId = 0;
  let topWall = false;
  let bottomWall = false;
  let rightWall = false;
  let leftWall = false;
  //OKVIR
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (i === 0) {
        topWall = true;
      }
      if (i === NUMBER_OF_ROWS - 1) {
        bottomWall = true;
      }
      if (j === 0) {
        leftWall = true;
      }
      if (j === NUMBER_OF_COLUMNS - 1) {
        rightWall = true;
      }
      //
      //TESTNI LEVEL
      if (j === 2) {
        if (i === 7) {
          bottomWall = true;
          leftWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          leftWall = true;
        }
        if (i === 3) {
          topWall = true;
          leftWall = true;
        }
        if (i === 5) {
          bottomWall = true;
        }
      }
      if (j === 4) {
        if (i === 2) {
          topWall = true;
          leftWall = true;
        }
        if (i === 8) {
          bottomWall = true;
          rightWall = true;
        }
      }
      if (j === 6) {
        if (i === 7) {
          bottomWall = true;
          rightWall = true;
        }
        if (i > 3 && i < 7 && i !== 5) {
          rightWall = true;
        }
        if (i === 3) {
          topWall = true;
          rightWall = true;
        }
        if (i === 5) {
          topWall = true;
        }
      }

      if (j === 3 || j === 5) {
        if (i === 3) {
          topWall = true;
          bottomWall = true;
        }
        if (i === 7) {
          topWall = true;
          bottomWall = true;
        }
      }
      if ((i === 5 || i === 4 || i === 6) && j === 4) {
        leftWall = true;
        rightWall = true;
      }
      if (i === 5 && (j === 3 || j === 5)) {
        leftWall = true;
        rightWall = true;
      }

      //

      fields.push({
        top: FIELD_HEIGHT * i,
        left: FIELD_WIDTH * j,
        topWall,
        bottomWall,
        rightWall,
        leftWall,
        fieldId,
        leftFieldId: j === 0 ? null : fieldId - 1,
        rightFieldId: j === NUMBER_OF_COLUMNS - 1 ? null : fieldId + 1,
        topFieldId: i === 0 ? null : fieldId - NUMBER_OF_COLUMNS,
        bottomFieldId:
          i === NUMBER_OF_ROWS - 1 ? null : fieldId + NUMBER_OF_COLUMNS,
      });

      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
    }
  }
  return fields;
};

function Fields(props) {
  const [fields, setFields] = useState(() => {
    return initializeLevel();
  });

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
          //fieldId,
          topWall,
          bottomWall,
          rightWall,
          leftWall,
        } = field;
        return (
          <div
            key={uuid()}
            style={{
              border: '0.3px solid red',
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
            />
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAllFields: (fields) => dispatch(setAllFields(fields)),
  };
};

export default connect(null, mapDispatchToProps)(Fields);
