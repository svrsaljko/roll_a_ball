import axios from 'axios';

const SIGNUP_URL = 'http://localhost:8000/public/registration';

export function registerTestUsers() {
  for (let i = 1; i < 15; i++) {
    axios({
      method: 'post',
      url: SIGNUP_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userName: `user${i}`,
        email: `user${i}@test-user.com`,
        password: '12345',
        highscore: i * 1000,
      },
    })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => console.log('err: ', err));
  }
}
