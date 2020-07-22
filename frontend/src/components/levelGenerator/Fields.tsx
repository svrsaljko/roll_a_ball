import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../../reducers';
import { updateField } from '../../actions/actions';
import { IField } from '../../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from './Constants';
import Walls from './Walls';
import '../../css/levelGenerator/field.css';

interface IProps {
  fields: IField[];
  updateField(fieldId: number, clickCounter: number): void;
}

const onFieldClick = (
  fieldId: number,
  clickCounter: number,
  updateField: (fieldId: number, clickCounter: number) => void
) => {
  // console.log('fieldId: ', fieldId);
  // console.log('clickcounter: ', clickCounter);
  if (clickCounter === 10) {
    clickCounter = 0;
  } else {
    clickCounter++;
  }
  updateField(fieldId, clickCounter);
};
function Fields(props: IProps) {
  const [fields, setFields] = useState(props.fields);

  return (
    <div>
      {fields.map((field) => (
        <div
          className="field"
          key={field.fieldId}
          onClick={() => {
            onFieldClick(field.fieldId, field.clickCounter, props.updateField);
          }}
          style={{
            position: 'absolute',

            top: `${field.top}px`,
            left: `${field.left}px`,
            width: `${FIELD_WIDTH}px`,
            height: `${FIELD_HEIGHT}px`,
          }}
        >
          <Walls
            topWall={field.topWall}
            bottomWall={field.bottomWall}
            rightWall={field.rightWall}
            leftWall={field.leftWall}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const fields: IField[] = state.levelGeneratorReducer.fields;

  return {
    fields,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateField: (fieldId: number, clickCounter: number) =>
      dispatch(updateField(fieldId, clickCounter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fields);
