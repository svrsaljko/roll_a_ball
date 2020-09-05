import React, { Component } from 'react';
import Fields from './Fields';
import Ball from './Ball';
import PauseMenu from './PauseMenu';
import NextLevelMenu from './NextLevelMenu';
import GameOverMenu from './GameOverMenu';
import StartMenu from './StartMenu';
import GameEndMenu from './GameEndMenu';
import { levels } from '../hoc/Levels';
import { IField } from '../interfaces/IField';
import { ILevel } from '../interfaces/ILevel';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import axios from 'axios';
import {
  setCurrentLevel,
  setScore,
  removeDiamondFromField,
  setNextLevelMenuState,
  setGameOverMenuState,
  setStartGameState,
  setGameEndMenuState,
  setUserHighscore,
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
  URL_GET_USER_HIGHSCORE,
} from './Constants';
import { isSignedIn } from '../service/authService';

const SPEED_LIMIT = 2.5;

interface IState {
  x: number;
  y: number;
  positionX: number;
  positionY: number;
  currentFieldId: number;
  setFieldFlag: boolean;
  ballColor: string;
  ballSpeedCoefficient: number;
  frictionCoefficient: number;
  boardBackground: string;
}

interface IProps {
  currentLevel: number;
  currentScore: number;
  isGamePaused: boolean;
  fields: IField[];
  nextLevelMenuState: string;
  startGame: boolean;
  gameOverMenuState: string;
  gameEndMenuState: string;
  startGameMenuState: string;
  setGameEndMenuState: (isGameEndMenuActive: boolean) => void;
  setCurrentLevel: (currentLevel: number) => void;
  removeDiamondFromField: (fields: IField[]) => void;
  setScore: (newScore: number) => void;
  setNextLevelMenuState: (isNextLevelMenuActive: boolean) => void;
  setGameOverMenuState: (isGameOverMenuActive: boolean) => void;
  setStartGameState: (startGame: boolean) => void;
  setUserHighscore: (userHighscore: number) => void;
}

interface IPrevProps {
  fields: IField[];
  currentLevel: number;
  nextLevelMenuState: string;
}

class Board extends Component<IProps> {
  state: IState = {
    x: 0,
    y: 0,
    positionX: 0,
    positionY: 0,
    currentFieldId: 10,

    setFieldFlag: true,
    ballColor: 'darkRed',
    ballSpeedCoefficient: 1,
    frictionCoefficient: 1,
    boardBackground: '',
  };

  FIELDS: IField[] = [];

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

  setSpeedLimit = (accelerometerCoordinate: number) => {
    const { ballSpeedCoefficient, frictionCoefficient } = this.state;
    const speedLimit = SPEED_LIMIT * frictionCoefficient * ballSpeedCoefficient;

    if (accelerometerCoordinate > 0) {
      if (accelerometerCoordinate >= speedLimit) {
        return speedLimit;
      } else {
        return accelerometerCoordinate;
      }
    } else if (accelerometerCoordinate <= 0) {
      if (accelerometerCoordinate <= -speedLimit) {
        return -speedLimit;
      } else {
        return accelerometerCoordinate;
      }
    }
  };

  changePositionX = (positionX: number, x: number) => {
    x = this.setSpeedLimit(x);
    this.setState({
      positionX: positionX - x,
    });
  };

  changePositionY = (positionY: number, y: number) => {
    y = this.setSpeedLimit(y);
    this.setState({
      positionY: positionY + y,
    });
  };

  getUserHighScore = () => {
    axios
      .get(URL_GET_USER_HIGHSCORE)
      .then((res) => {
        this.props.setUserHighscore(res.data);
      })
      .catch((err) => {});
  };

  isBallMoving() {
    if (
      this.props.startGame &&
      !this.returnGamePauseState() &&
      this.props.nextLevelMenuState === 'none' &&
      this.props.gameOverMenuState === 'none' &&
      this.props.gameEndMenuState === 'none'
    ) {
      return true;
    } else return false;
  }

  componentDidUpdate(prevProps: IPrevProps) {
    // const { currentLevel } = this.props;

    if (
      prevProps.nextLevelMenuState === 'none' &&
      this.props.nextLevelMenuState === 'flex'
    ) {
      this.FIELDS = levels[prevProps.currentLevel + 1].fields;
      const {
        ballStartFieldId,
        ballColor,
        ballSpeedCoefficient,
        frictionCoefficient,
        boardBackground,
      } = levels[prevProps.currentLevel + 1];
      // this.FIELDS = this.props.levels[prevProps.currentLevel + 1].fields;
      const positionY = this.FIELDS[ballStartFieldId].top + FIELD_HEIGHT / 2;
      const positionX = this.FIELDS[ballStartFieldId].left + FIELD_WIDTH / 2;
      this.setState({
        positionY,
        positionX,
        currentFieldId: ballStartFieldId,
        setFieldFlag: false,
        ballColor,
        ballSpeedCoefficient,
        frictionCoefficient,
        boardBackground,
      });
    }

    if (prevProps.fields.length > 0) {
      if (this.state.setFieldFlag) {
        const {
          ballStartFieldId,
          ballColor,
          ballSpeedCoefficient,
          frictionCoefficient,
          boardBackground,
        } = levels[prevProps.currentLevel];

        this.FIELDS = prevProps.fields;

        const positionY = this.FIELDS[ballStartFieldId].top + FIELD_HEIGHT / 2;
        const positionX = this.FIELDS[ballStartFieldId].left + FIELD_WIDTH / 2;

        this.setState({
          positionY,
          positionX,
          currentFieldId: ballStartFieldId,
          setFieldFlag: false,
          ballColor,
          ballSpeedCoefficient,
          frictionCoefficient,
          boardBackground,
        });
      }
    }
  }

  componentDidMount() {
    if (isMobile) {
      if (isSignedIn() && navigator.onLine) {
        this.getUserHighScore();
      }
      let accelerometer = new window.Accelerometer({ frequency: 60 });
      accelerometer.addEventListener('reading', (e: Event) => {
        this.setState({
          x: accelerometer.x,
          y: accelerometer.y,
        });
      });
      accelerometer.start();
      setInterval(() => {
        if (this.isBallMoving()) {
          this.fieldDetector();
          this.itemsDetector();
          this.moveLeft();
          this.moveRight();
          this.moveDown();
          this.moveUp();
        }
      }, 1000 / 60);
    }
  }

  returnGamePauseState() {
    if (this.props.isGamePaused === undefined) {
      return false;
    } else return this.props.isGamePaused;
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

  itemsDetector() {
    const { positionX, positionY, currentFieldId } = this.state;
    const ballX = parseInt(positionX.toFixed(0), 10);
    const ballY = parseInt(positionY.toFixed(0), 10);

    this.doorDetector(ballX, ballY, currentFieldId);
    this.diamondShapeDetector(ballX, ballY, currentFieldId);
    this.hexgonShapeDetector(ballX, ballY, currentFieldId);
    this.enemyShapeDetector(ballX, ballY, currentFieldId);
  }

  doorDetector(ballX: number, ballY: number, currentFieldId: number) {
    const leftBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH / 5).toFixed(0),
      10
    );
    const rightBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH * (4 / 5)).toFixed(0),
      10
    );

    const topBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT / 5).toFixed(0),
      10
    );
    const bottomBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT * (3 / 4)).toFixed(0),
      10
    );

    if (
      this.FIELDS[currentFieldId].hasBlackDoor ||
      this.FIELDS[currentFieldId].hasIceDoor ||
      this.FIELDS[currentFieldId].hasGoldDoor
    ) {
      if (
        ballX > leftBorder &&
        ballX < rightBorder &&
        ballY > topBorder &&
        ballY < bottomBorder
      ) {
        if (this.props.currentLevel < levels.length - 1) {
          this.props.setNextLevelMenuState(true);
        } else {
          this.props.setGameEndMenuState(true);
        }
      }
    }
  }

  enemyShapeDetector(ballX: number, ballY: number, currentFieldId: number) {
    const leftBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH * (1 / 12)).toFixed(0),
      10
    );
    const rightBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH * (10 / 12)).toFixed(0),
      10
    );

    const topBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT / 5).toFixed(0),
      10
    );
    const bottomBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT * (3 / 4)).toFixed(0),
      10
    );
    if (
      this.FIELDS[currentFieldId].hasNeonRedEnemy ||
      this.FIELDS[currentFieldId].hasNeonGreenEnemy ||
      this.FIELDS[currentFieldId].hasNeonBlueEnemy
    ) {
      if (
        ballX > leftBorder &&
        ballX < rightBorder &&
        ballY > topBorder &&
        ballY < bottomBorder
      ) {
        this.props.setGameOverMenuState(true);
      }
    }
  }

  hexgonShapeDetector(ballX: number, ballY: number, currentFieldId: number) {
    const { currentScore } = this.props;

    const leftBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH / 10).toFixed(0),
      10
    );
    const rightBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH * (9 / 10)).toFixed(0),
      10
    );

    const topBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT / 7).toFixed(0),
      10
    );
    const bottomBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT * (6 / 7)).toFixed(0),
      10
    );
    if (
      this.FIELDS[currentFieldId].hasGold ||
      this.FIELDS[currentFieldId].hasSilver
    ) {
      if (
        ballX > leftBorder &&
        ballX < rightBorder &&
        ballY > topBorder &&
        ballY < bottomBorder
      ) {
        let newScore;
        const newFileds = this.FIELDS.map((field: IField) => {
          if (field.fieldId === currentFieldId) {
            if (field.hasGold) {
              field.hasGold = false;
              newScore = currentScore + 10000;
            } else if (field.hasSilver) {
              field.hasSilver = false;
              newScore = currentScore + 2000;
            }
          }
          return field;
        });

        this.props.removeDiamondFromField(newFileds);
        this.props.setScore(newScore);
      }
    }
  }

  diamondShapeDetector(ballX: number, ballY: number, currentFieldId: number) {
    const { currentScore } = this.props;

    const leftBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH / 5).toFixed(0),
      10
    );
    const rightBorder = parseInt(
      (this.FIELDS[currentFieldId].left + FIELD_WIDTH * (4 / 5)).toFixed(0),
      10
    );

    const topBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT / 5).toFixed(0),
      10
    );
    const bottomBorder = parseInt(
      (this.FIELDS[currentFieldId].top + FIELD_HEIGHT * (3 / 4)).toFixed(0),
      10
    );
    if (
      this.FIELDS[currentFieldId].hasEmerald ||
      this.FIELDS[currentFieldId].hasSapphire ||
      this.FIELDS[currentFieldId].hasRuby ||
      this.FIELDS[currentFieldId].hasDiamond
    ) {
      if (
        ballX > leftBorder &&
        ballX < rightBorder &&
        ballY > topBorder &&
        ballY < bottomBorder
      ) {
        let newScore;
        const newFileds = this.FIELDS.map((field: IField) => {
          if (field.fieldId === currentFieldId) {
            if (field.hasEmerald) {
              field.hasEmerald = false;
              newScore = currentScore + 50000;
            } else if (field.hasSapphire) {
              field.hasSapphire = false;
              newScore = currentScore + 40000;
            } else if (field.hasRuby) {
              field.hasRuby = false;
              newScore = currentScore + 30000;
            } else if (field.hasDiamond) {
              field.hasDiamond = false;
              newScore = currentScore + 20000;
            }
          }
          return field;
        });

        this.props.removeDiamondFromField(newFileds);
        this.props.setScore(newScore);
      }
    }
  }

  render() {
    const { positionX, positionY, ballColor, boardBackground } = this.state;
    const {
      startGameMenuState,
      nextLevelMenuState,
      gameOverMenuState,
      gameEndMenuState,
    } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${boardBackground})`,

          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          position: 'relative',
        }}
      >
        <Fields />
        <Ball color={ballColor} positionX={positionX} positionY={positionY} />
        {startGameMenuState === 'flex' ? <StartMenu /> : <div></div>}
        {this.returnGamePauseState() ? <PauseMenu /> : <div></div>}
        {nextLevelMenuState === 'flex' ? <NextLevelMenu /> : <div></div>}
        {gameOverMenuState === 'flex' ? <GameOverMenu /> : <div></div>}
        {gameEndMenuState === 'flex' ? <GameEndMenu /> : <div></div>}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer) => {
  const { fields } = state.fieldsReducer;
  const { currentLevel } = state.levelReducer;
  const { currentScore } = state.scoreReducer;
  const { isGamePaused } = state.pauseMenuReducer;
  const { nextLevelMenuState } = state.nextLevelMenuReducer;
  const { startGame, startGameMenuState } = state.startGameReducer;
  const { gameOverMenuState } = state.gameOverMenuReducer;
  const { gameEndMenuState } = state.gameEndMenuReducer;
  return {
    fields,
    currentLevel,
    currentScore,
    isGamePaused,
    startGameMenuState,
    nextLevelMenuState,
    startGame,
    gameOverMenuState,
    gameEndMenuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentLevel: (currentLevel: number) =>
      dispatch(setCurrentLevel(currentLevel)),
    removeDiamondFromField: (fields: IField[]) =>
      dispatch(removeDiamondFromField(fields)),
    setScore: (newScore: number) => dispatch(setScore(newScore)),
    setNextLevelMenuState: (isNextLevelMenuActive: boolean) =>
      dispatch(setNextLevelMenuState(isNextLevelMenuActive)),
    setGameOverMenuState: (isGameOverMenuActive: boolean) =>
      dispatch(setGameOverMenuState(isGameOverMenuActive)),
    setStartGameState: (startGame: boolean) =>
      dispatch(setStartGameState(startGame)),
    setGameEndMenuState: (isGameEndMenuActive: boolean) =>
      dispatch(setGameEndMenuState(isGameEndMenuActive)),
    setUserHighscore: (userHighscore: number) =>
      dispatch(setUserHighscore(userHighscore)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
