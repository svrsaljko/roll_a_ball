import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import axios from 'axios';
import { getUsername } from '../service/authService';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
  VERTICAL_BRICK_WIDTH,
} from '../components/Constants';

interface IProps {
  pauseMenuState: string;
  currentScore: number;
}

const onSubmitScore = (currentScore: number) => {
  // console.log('current score: ', currentScore);
  // let testUser: any = {
  //   userName: 'stipe',
  //   highscore: 7000,
  // };
  // axios
  //   .get(URL_GET_LIST)
  //   .then((res) => {
  //     console.log('res: ', res);
  //   })
  //   .catch((err) => {
  //     console.log('err: ', err);
  //   });
  // axios
  //   .patch(URL_PATCH, testUser)
  //   .then((res) => {
  //     console.log('res: ', res);
  //   })
  //   .catch((err) => {
  //     console.log('err: ', err);
  //   });
};

function PauseMenu(props: IProps) {
  const { pauseMenuState, currentScore } = props;
  // console.log('props. ', props);

  return (
    <div
      style={{
        display: `${pauseMenuState}`,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: `${HORIZONTAL_BRICK_HEIGHT}px`,
        marginLeft: `${VERTICAL_BRICK_WIDTH}px`,

        height: `${BOARD_HEIGHT - 2 * HORIZONTAL_BRICK_HEIGHT}px`,
        width: `${BOARD_WIDTH - 2 * VERTICAL_BRICK_WIDTH}px`,
      }}
    >
      <button
        onClick={() => {
          onSubmitScore(currentScore);
        }}
      >
        get score
      </button>
    </div>
  );
}

export const mapStateToProps = (state: IRootReducer) => {
  const { pauseMenuState } = state.pauseMenuReducer;
  const { currentScore } = state.scoreReducer;
  return { pauseMenuState, currentScore };
};

export default connect(mapStateToProps)(PauseMenu);
