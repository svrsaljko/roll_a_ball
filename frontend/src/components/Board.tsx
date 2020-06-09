import React, { Component } from 'react';
import Background from '../images/background.png';
import Fields from './Fields';
import Ball from './Ball';
import { IField } from '../interfaces/IField';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  setCurrentLevel,
  setScore,
  removeDiamondFromField,
} from '../actions/actions';
import { IRootReducer } from '../reducers/index';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BALL_SIZE,
  SENSITIVITY,
  FIELD_WIDTH,
  FIELD_HEIGHT,
  HORIZONTAL_BRICK_HEIGHT,
} from './Constants';

interface IState {
  x: number;
  y: number;
  positionX: number;
  positionY: number;
  currentFieldId: number;
  start: boolean;
  currentLevel: number;
  numberOfLevels: number;
}

interface IProps {
  currentLevel: number;
  currentScore: number;
  fields: IField[];
  setCurrentLevel: (currentLevel: number) => void;
  removeDiamondFromField: (fields: IField[]) => void;
  setScore: (newScore: number) => void;
}

interface IPrevProps {
  fields: IField[];
  currentLevel: number;
}

class Board extends Component<IProps> {
  state: IState = {
    x: 0,
    y: 0,
    positionX: 0,
    positionY: 0,
    currentFieldId: 10,
    start: false,
    currentLevel: 1,
    numberOfLevels: 3,
    // FIELDS:[null]
  };

  FIELDS: IField[] = [];
  //currentLevel: number;

  moveLeft() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].leftWall) {
      this.moveLeftToCurrentFieldLeftWall(x, positionX, currentFieldId, FIELDS);
    } else if (FIELDS[FIELDS[currentFieldId].leftFieldId].rightWall) {
      this.moveLeftToLeftFieldRightWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall &&
      FIELDS[FIELDS[currentFieldId].leftFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveLeftToLeftFieldBottomAndTopWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall
    ) {
      this.moveLeftToLeftFieldBottomWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].leftFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveLeftToLeftFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else {
      this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
    }
  }
  moveRight() {
    let { x, positionX, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].rightWall) {
      this.moveRightToCurrentFieldRightWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (FIELDS[FIELDS[currentFieldId].rightFieldId].leftWall) {
      this.moveRightToRightFieldLeftWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall &&
      FIELDS[FIELDS[currentFieldId].rightFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveRightToRightFieldBottomAndTopWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].bottomWall &&
      !FIELDS[currentFieldId].bottomWall
    ) {
      this.moveRightToRightFieldBottomWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].rightFieldId].topWall &&
      !FIELDS[currentFieldId].topWall
    ) {
      this.moveRightToRightFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else {
      this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
    }
  }
  moveUp() {
    const { y, positionY, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].topWall) {
      this.moveUpToCurrentFieldTopWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].topFieldId].bottomWall ||
      (FIELDS[FIELDS[currentFieldId].topFieldId].leftWall &&
        FIELDS[FIELDS[currentFieldId].topFieldId].rightWall)
    ) {
      this.moveUpToTopFieldBottomWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].topFieldId].leftWall &&
      !FIELDS[currentFieldId].leftWall
    ) {
      this.moveUpToTopFieldLeftWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].topFieldId].rightWall &&
      !FIELDS[currentFieldId].rightWall
    ) {
      this.moveUpToTopFieldRightWall(y, positionY, currentFieldId, FIELDS);
    } else {
      this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
    }
  }
  moveDown() {
    let { y, positionY, currentFieldId } = this.state;
    const { FIELDS } = this;
    if (FIELDS[currentFieldId].bottomWall) {
      this.moveDownToCurrentFieldBottomWall(
        y,
        positionY,
        currentFieldId,
        FIELDS
      );
    } else if (
      FIELDS[FIELDS[currentFieldId].bottomFieldId].topWall ||
      (FIELDS[FIELDS[currentFieldId].bottomFieldId].leftWall &&
        FIELDS[FIELDS[currentFieldId].bottomFieldId].rightWall)
    ) {
      this.moveDownToBottomFieldTopWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].bottomFieldId].leftWall &&
      !FIELDS[currentFieldId].leftWall
    ) {
      this.moveDownToBottomFieldLeftWall(y, positionY, currentFieldId, FIELDS);
    } else if (
      FIELDS[FIELDS[currentFieldId].bottomFieldId].rightWall &&
      !FIELDS[currentFieldId].rightWall
    ) {
      this.moveDownToBottomFieldRightWall(y, positionY, currentFieldId, FIELDS);
    } else {
      this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
    }
  }

  //RIGHT WALL

  moveDownToBottomFieldRightWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionX } = this.state;
    if (positionX > FIELDS[currentFieldId].left + FIELD_WIDTH / 2 - BALL_SIZE) {
      if (
        y > SENSITIVITY &&
        positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveUpToTopFieldRightWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionX } = this.state;
    if (positionX > FIELDS[currentFieldId].left + FIELD_WIDTH / 2 - BALL_SIZE) {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveLeftToLeftFieldRightWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      x > SENSITIVITY &&
      positionX > FIELDS[currentFieldId].left + BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  //LEFT WALL
  moveUpToTopFieldLeftWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionX } = this.state;
    if (positionX < FIELDS[currentFieldId].left + FIELD_WIDTH / 2 + BALL_SIZE) {
      if (
        y < SENSITIVITY &&
        positionY > FIELDS[currentFieldId].top + BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveUpToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveDownToBottomFieldLeftWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionX } = this.state;
    if (positionX < FIELDS[currentFieldId].left + FIELD_WIDTH / 2 + BALL_SIZE) {
      if (
        y > SENSITIVITY &&
        positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
      ) {
        this.changePositionY(positionY, y);
      }
    } else this.moveDownToNextField(y, positionY, currentFieldId, FIELDS);
  };

  moveRightToRightFieldLeftWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      x < SENSITIVITY &&
      positionX < FIELDS[currentFieldId].left + FIELD_WIDTH - BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  //TOP AND BOTTOM WALL
  moveRightToRightFieldBottomAndTopWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;

    if (
      x < SENSITIVITY &&
      positionX <
        FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE / 2
    ) {
      this.moveRightToRightFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      positionY >
      FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE / 2
    ) {
      this.moveRightToRightFieldBottomWall(
        x,
        positionX,
        currentFieldId,
        FIELDS
      );
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveLeftToLeftFieldBottomAndTopWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;

    if (
      positionY <
      FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE / 2
    ) {
      this.moveLeftToLeftFieldTopWall(x, positionX, currentFieldId, FIELDS);
    } else if (
      positionY >
      FIELDS[currentFieldId].top +
        FIELD_HEIGHT -
        HORIZONTAL_BRICK_HEIGHT -
        BALL_SIZE / 2
    ) {
      this.moveLeftToLeftFieldBottomWall(x, positionX, currentFieldId, FIELDS);
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  //TOP WALL

  moveLeftToLeftFieldTopWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;

    if (
      positionY <
      FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE
    ) {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left + BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveRightToRightFieldTopWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;
    if (
      positionY <
      FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE
    ) {
      if (
        x < SENSITIVITY &&
        positionX < FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveDownToBottomFieldTopWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      y > SENSITIVITY &&
      positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT - BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  // BOTTOM WALL
  moveLeftToLeftFieldBottomWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;

    if (
      positionY >
      FIELDS[currentFieldId].top +
        FIELD_HEIGHT -
        HORIZONTAL_BRICK_HEIGHT -
        BALL_SIZE
    ) {
      if (
        x > SENSITIVITY &&
        positionX > FIELDS[currentFieldId].left + BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveLeftToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveRightToRightFieldBottomWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    const { positionY } = this.state;
    if (
      positionY >
      FIELDS[currentFieldId].top +
        FIELD_HEIGHT -
        HORIZONTAL_BRICK_HEIGHT -
        BALL_SIZE
    ) {
      if (
        x < SENSITIVITY &&
        positionX < FIELDS[FIELDS[currentFieldId].rightFieldId].left - BALL_SIZE
      ) {
        this.changePositionX(positionX, x);
      }
    } else this.moveRightToNextField(x, positionX, currentFieldId, FIELDS);
  };

  moveUpToTopFieldBottomWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (y < SENSITIVITY && positionY > FIELDS[currentFieldId].top + BALL_SIZE) {
      this.changePositionY(positionY, y);
    }
  };

  // MOVE
  moveLeftToCurrentFieldLeftWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      x > SENSITIVITY &&
      positionX > FIELDS[currentFieldId].left + FIELD_WIDTH / 2 + BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveLeftToNextField = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (x > SENSITIVITY && positionX > FIELDS[currentFieldId].left) {
      this.changePositionX(positionX, x);
    }
  };

  moveRightToNextField = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      x < SENSITIVITY &&
      positionX < FIELDS[currentFieldId].left + FIELD_WIDTH
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveRightToCurrentFieldRightWall = (
    x: number,
    positionX: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      x < SENSITIVITY &&
      positionX < FIELDS[currentFieldId].left + FIELD_WIDTH / 2 - BALL_SIZE
    ) {
      this.changePositionX(positionX, x);
    }
  };

  moveUpToNextField = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (y < SENSITIVITY && positionY > FIELDS[currentFieldId].top) {
      this.changePositionY(positionY, y);
    }
  };

  moveUpToCurrentFieldTopWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      y < SENSITIVITY &&
      positionY >
        FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  moveDownToNextField = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      y > SENSITIVITY &&
      positionY < FIELDS[currentFieldId].top + FIELD_HEIGHT
    ) {
      this.changePositionY(positionY, y);
    }
  };

  moveDownToCurrentFieldBottomWall = (
    y: number,
    positionY: number,
    currentFieldId: number,
    FIELDS: IField[]
  ) => {
    if (
      y > SENSITIVITY &&
      positionY <
        FIELDS[currentFieldId].top +
          FIELD_HEIGHT -
          HORIZONTAL_BRICK_HEIGHT -
          BALL_SIZE
    ) {
      this.changePositionY(positionY, y);
    }
  };

  changePositionX = (positionX: number, x: number) => {
    this.setState({
      positionX: positionX - x,
    });
  };

  changePositionY = (positionY: number, y: number) => {
    this.setState({
      positionY: positionY + y,
    });
  };

  componentDidUpdate(prevProps: IPrevProps) {
    if (prevProps.fields.length > 0) {
      if (!this.state.start) {
        // const { currentFieldId } = this.state;
        const currentFieldId = 10;
        this.FIELDS = prevProps.fields;

        const positionY =
          this.FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE;
        const positionX =
          this.FIELDS[currentFieldId].left + FIELD_WIDTH / 2 + BALL_SIZE;

        // const positionY =
        //   this.FIELDS[currentFieldId].top + HORIZONTAL_BRICK_HEIGHT + BALL_SIZE;
        // const positionX =
        //   this.FIELDS[currentFieldId].left + FIELD_WIDTH / 2 + BALL_SIZE;
        this.setState({
          positionY,
          positionX,
          start: true,
          currentLevel: prevProps.currentLevel,
        });
      }
    }
  }

  componentDidMount() {
    if (isMobile) {
      let accelerometer = new window.Accelerometer({ frequency: 60 });

      accelerometer.addEventListener('reading', (e: Event) => {
        this.setState({
          x: accelerometer.x,
          y: accelerometer.y,
        });
      });
      accelerometer.start();
      setInterval(() => {
        if (this.state.start) {
          this.moveLeft();
          this.moveRight();
          this.moveDown();
          this.moveUp();
          this.fieldDetector();
          this.holeDetector();
          this.diamondDetector();
        }
      }, 1000 / 60);
    }
  }

  fieldDetector() {
    const { positionX, positionY } = this.state;
    const { FIELDS } = this;

    for (let i = 0; i < FIELDS.length; i++) {
      if (
        positionY > FIELDS[i].top &&
        positionY < FIELDS[i].top + FIELD_HEIGHT &&
        positionX > FIELDS[i].left &&
        positionX < FIELDS[i].left + FIELD_WIDTH
      ) {
        this.setState({ currentFieldId: FIELDS[i].fieldId });
      }
    }
  }

  holeDetector() {
    const { FIELDS } = this;
    const { positionX, positionY, currentFieldId } = this.state;
    const ballX = positionX.toFixed(0);
    const ballY = positionY.toFixed(0);
    if (FIELDS[currentFieldId].hasHole) {
      const holeX = (FIELDS[currentFieldId].left + FIELD_WIDTH / 2).toFixed(0);
      const holeY = (FIELDS[currentFieldId].top + FIELD_HEIGHT / 2).toFixed(0);

      if (ballX === holeX || ballY === holeY) {
        let { currentLevel, numberOfLevels } = this.state;
        if (currentLevel < numberOfLevels) {
          currentLevel++;

          this.props.setCurrentLevel(currentLevel);
          this.FIELDS = this.props.fields;
          this.setState({
            currentLevel,
            start: false,
          });
        }
      }
    }
  }

  diamondDetector() {
    const { FIELDS } = this;
    const { positionX, positionY, currentFieldId } = this.state;
    const { currentScore } = this.props;
    const ballX = positionX.toFixed(0);
    const ballY = positionY.toFixed(0);
    if (FIELDS[currentFieldId].hasDiamond) {
      const holeX = (FIELDS[currentFieldId].left + FIELD_WIDTH / 2).toFixed(0);
      const holeY = (FIELDS[currentFieldId].top + FIELD_HEIGHT / 2).toFixed(0);

      if (ballX === holeX || ballY === holeY) {
        console.log('diamond detected');
        const newFileds = FIELDS.map((field) => {
          if (field.fieldId === currentFieldId) {
            console.log('delete diamond');
            field.hasDiamond = false;
          }
          return field;
        });
        const newScore = currentScore + 1000;
        this.props.removeDiamondFromField(newFileds);
        this.props.setScore(newScore);
      }
    }
  }

  render() {
    const { positionX, positionY } = this.state;

    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,

          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          position: 'relative',
        }}
      >
        <Fields />
        <Ball positionX={positionX} positionY={positionY} />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer) => {
  const fields: IField[] = state.fieldsReducer.fields;
  const currentLevel: number = state.levelReducer.currentLevel;
  const currentScore: number = state.scoreReducer.currentScore;
  return {
    fields,
    currentLevel,
    currentScore,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
    removeDiamondFromField: (fields: IField[]) =>
      dispatch(removeDiamondFromField(fields)),
    setScore: (newScore: number) => dispatch(setScore(newScore)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
