import React from 'react';
import { connect } from 'react-redux';
import { IField } from '../../interfaces/IField';
import { IRootReducer } from '../../reducers';
import '../../css/levelGenerator/bottomContainer.css';

interface IProps {
  fields: IField[];
}

const downloadLevelTxt = (fields: IField[]) => {
  const element = document.createElement('a');
  const fieldsBuffer = fields;
  const txtFields = fieldsBuffer.map((field) => {
    delete field['clickCounter'];
    return field;
  });

  const file = new Blob([JSON.stringify(txtFields)], {
    type: 'text/plain',
  });

  element.href = URL.createObjectURL(file);
  element.download = 'level.txt';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

function BottomContainer(props: IProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3rem',
      }}
    >
      <button
        className="generate-level-button"
        onClick={() => {
          downloadLevelTxt(props.fields);
        }}
      >
        GENERATE LEVEL
      </button>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const fields: IField[] = state.fieldsReducer.fields;
  console.log('fields');

  return {
    fields,
  };
};

export default connect(mapStateToProps)(BottomContainer);
