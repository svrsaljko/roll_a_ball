import React, { Component } from 'react';
import {
  MAX_ROW_BRICKS,
  MAX_COLUMN_BRICKS,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT
} from './Constants';
import { connect } from 'react-redux';
import Fields from './Fields';

import BrickDark from '../images/brickdark.png';
import { setAllWallsCoordinates } from '../actions/actions';
// import { SET_ALL_WALLS_COORDINATES } from '../actions/types';

class Walls extends Component {
  state = {
    bricks: [],
    wallCoordinates: []
  };

  initializeBricks() {
    let bricks = [];
    let wallCoordinates = [];

    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < MAX_ROW_BRICKS; i++) {
        let initialTop;
        if (j === 0) {
          initialTop = 0;
        } else if (j === 1) {
          initialTop = BOARD_HEIGHT - BRICK_HEIGHT;
        }
        let initialLeft = i * BRICK_WIDTH;

        bricks.push(
          <img
            style={{
              width: `${BRICK_WIDTH}px`,
              height: `${BRICK_HEIGHT}px`,

              position: 'absolute',
              left: `${initialLeft}px`,
              top: `${initialTop}px`
            }}
            src={BrickDark}
            alt="brickDarkImg"
          />
        );
      }
    }

    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < MAX_COLUMN_BRICKS; i++) {
        let initialTop = BRICK_WIDTH / 2 + BRICK_HEIGHT / 2 + i * BRICK_WIDTH;
        let initialLeft;
        if (j === 0) {
          initialLeft = -BRICK_HEIGHT / 2;
        } else if (j === 1) {
          initialLeft = BOARD_WIDTH - BRICK_HEIGHT - BRICK_HEIGHT / 2;
        }

        bricks.push(
          <img
            className="RotatedBrick"
            style={{
              width: `${BRICK_WIDTH}px`,
              height: `${BRICK_HEIGHT}px`,

              position: 'absolute',
              left: `${initialLeft}px`,
              top: `${initialTop}px`
            }}
            src={BrickDark}
            alt="brickDarkImg"
          />
        );
      }
    }
    // for (let j = 0; j < 1; j++) {
    //   for (let i = 0; i < MAX_ROW_BRICKS / 3; i++) {
    //     let initialTop;
    //     if (j === 0) {
    //       initialTop = 6 * BRICK_WIDTH;
    //     } else if (j === 1) {
    //       initialTop = 9 * BRICK_WIDTH;
    //     }
    //     let initialLeft = 2 * BRICK_WIDTH + i * BRICK_WIDTH;

    //     bricks.push(
    //       <img
    //         style={{
    //           width: `${BRICK_WIDTH}px`,
    //           height: `${BRICK_HEIGHT}px`,

    //           position: 'absolute',
    //           left: `${initialLeft}px`,
    //           top: `${initialTop}px`
    //         }}
    //         src={BrickDark}
    //         alt="brickDarkImg"
    //       />
    //     );
    //     if (i === 0) {
    //       wallCoordinates.push({
    //         leftSideOfWall: initialLeft,
    //         rightSideOfWall: initialLeft + (MAX_ROW_BRICKS / 3) * BRICK_WIDTH,
    //         bottomSideOfWall: initialTop + BRICK_HEIGHT,
    //         topSideOfWall: initialTop
    //       });
    //     }
    //   }
    // }

    this.setState({ bricks });
    // this.props.setAllWallsCoordinates(wallCoordinates);
    // console.log('this.props: ', this.props);
    // this.props.setAllWallsCoordinates(wallCoordinates);
  }

  componentDidMount() {
    // this.props.setAllWallsCoordinates('aaaaaaaaaaaaaresteareara');
    this.initializeBricks();
  }

  render() {
    // console.log('this.props: ', this);
    return (
      <div>
        {this.state.bricks} <Fields />{' '}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     state
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    setAllWallsCoordinates: wallsCoordinates =>
      dispatch(setAllWallsCoordinates(wallsCoordinates))
  };
};

export default connect(null, mapDispatchToProps)(Walls);
