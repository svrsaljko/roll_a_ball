import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { isSignedIn } from '../service/authService';
import '../css/SignIn.css';
import { registerTestUsers } from '../testScript/testUsersRegistration';

const SIGNUP_URL = 'http://localhost:8000/public/registration';

interface IProps {
  history: any;
}

export default function SignUp(props: IProps) {
  const { history } = props;
  if (isSignedIn()) {
    history.push('/');
  }

  const [values, handleChange] = useForm({
    userName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(' ');

  const onSubmit = () => {
    registerTestUsers();
    // console.log('on submit', values);
    // axios({
    //   method: 'post',
    //   url: SIGNUP_URL,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   //UBACI STVORENOG USERA, REDIRECT ITD.. public private routes
    //   data: {
    //     userName: 'user25',
    //     email: 'user25@test-user.com',
    //     password: '12345',
    //   },
    // })
    //   .then((res) => {
    //     console.log('res: ', res);
    //   })
    //   .catch((err) =>
    //     console.log('err: ', setMessage(err.response.data.message))
    //   );
  };
  return (
    <div>
      <Header />
      {isSignedIn() ? (
        <div></div>
      ) : (
        <div className="signin-container">
          <div className="signin-form">
            <div>{message}</div>
            <input
              className="signin-input"
              name="userName"
              placeholder="username"
              type="text"
              value={values.userName}
              onChange={handleChange}
            />
            <input
              className="signin-input"
              name="email"
              placeholder="email"
              type="text"
              value={values.email}
              onChange={handleChange}
            />
            <input
              className="signin-input"
              name="password"
              placeholder="password"
              type="text"
              value={values.password}
              onChange={handleChange}
            />
            <button
              className="signin-button"
              onClick={() => {
                onSubmit();
              }}
            >
              SIGN UP
            </button>
            <div className="signup-link-container">
              Already have an account!?&nbsp;
              <Link to="/signin" className="signup-link">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
