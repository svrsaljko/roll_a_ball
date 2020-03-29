import React, { Component } from 'react';
import {
  BRICK_HEIGHT,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  FIELD_WIDTH,
  FIELD_HEIGHT
} from './Constants';
import BrickDark from '../images/brickdark.png';

class Fields extends Component {
  state = { fields: [] };

  componentDidMount() {
    let fields = [];
    let fieldId = 0;
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        fields.push({
          top: `${BRICK_HEIGHT + FIELD_HEIGHT * i}`,
          left: `${BRICK_HEIGHT + FIELD_WIDTH * j}`,
          fieldId
        });
        fieldId++;
      }
    }

    console.log('fields: ', fields);
    this.setState({ fields });
  }

  render() {
    let { fields } = this.state;
    return (
      <div>
        {fields.map(field => {
          let { top, left } = field;
          return (
            <div
              style={{
                width: `${FIELD_WIDTH}px`,
                height: `${FIELD_HEIGHT}px`,
                left: `${left}px`,
                top: `${top}px`,
                position: 'absolute',
                border: '0.5px solid red'
              }}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default Fields;
