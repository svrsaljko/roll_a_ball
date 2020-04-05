import React, { Component } from 'react';
import {
  BRICK_HEIGHT,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  FIELD_WIDTH,
  FIELD_HEIGHT,
} from './Constants';
import Walls from './Walls';
import { connect } from 'react-redux';
import { setAllFields } from '../actions/actions';
import BrickDark from '../images/brickdark.png';

class Fields extends Component {
  state = { fields: [] };

  componentDidMount() {
    let fields = [];
    let fieldId = 0;
    let topWall = false;
    let bottomWall = false;
    let rightWall = false;
    let leftWall = false;
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

        //TEST

        // if (j === 4 || j === 3 || j === 5) {
        //   if (i === 0) {
        //     bottomWall = true;
        //   }
        //   if (i === 1 || i === 6) {
        //     // topWall = true;
        //   }
        //   if (i === 2) {
        //     topWall = true;
        //     leftWall = true;
        //   }

        //   if (i === 6) {
        //     topWall = true;
        //     bottomWall = true;
        //   }
        //   if (i === 4) {
        //     rightWall = true;
        //   }
        //   if (i === 7) {
        //     leftWall = true;
        //   }
        // }

        // if (j === 3 && i === 1) {
        //   topWall = true;
        // }

        // if (i === 5 && j === 2) {
        // }
        // if ((i === 5 || i === 4 || i === 6) && j === 3) {
        //   leftWall = true;
        // }

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
        }

        if (j === 3 || j === 5) {
          if (i === 3) {
            topWall = true;
          }
          if (i === 7) {
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

    this.props.setAllFields(fields);
    this.setState({ fields });
  }

  render() {
    let { fields } = this.state;
    return (
      <div>
        {fields.map((field) => {
          let { top, left, topWall, bottomWall, rightWall, leftWall } = field;
          return (
            <div
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
}

export default Fields;