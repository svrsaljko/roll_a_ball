import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../interfaces/IUser';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import {
  isSignedIn,
  setUserNameAndTokenToLocalStorage,
  getUsernameFromToken,
} from '../service/authService';
import '../css/SignIn.css';

const SIGNIN_URL = 'http://localhost:8000/public/login';

interface IProps {
  history: any;
}

export default function SignIn(props: IProps) {
  const { history } = props;
  if (isSignedIn()) {
    history.push('/');
  }

  const [values, handleChange] = useForm({ usernameEmail: '', password: '' });

  const [message, setMessage] = useState(' ');

  const onSubmit = () => {
    let testUser: IUser = {
      userName: null,
      email: 'user1@test-user.com',
      password: '12345678',
    };

    console.log('on submit', values);

    axios
      .post(SIGNIN_URL, testUser)
      .then((res) => {
        console.log('res: ', res);
        console.log('token: ', res.data);
        const token = res.data;
        if (token) {
          const username = getUsernameFromToken(token);
          setUserNameAndTokenToLocalStorage(token, username);

          axios.interceptors.request.use(
            function (config) {
              console.log('configured AUTHORIZATION HEADER');
              config.headers['Authorization'] = 'Bearer ' + token;

              return config;
            },
            function (err) {
              return Promise.reject(err);
            }
          );
          history.push('/');
        }
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  return (
    <div>
      <Header />
      {isSignedIn() ? (
        <div></div>
      ) : (
        <div className="signin-container">
          <div
            className="signin-form"
            style={{ minHeight: window.outerHeight }}
          >
            {message}
            <input
              className="signin-input"
              name="usernameEmail"
              placeholder="username,email"
              type="text"
              value={values.email}
              onChange={handleChange}
            />
            <input
              className="signin-input"
              name="password"
              placeholder="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <button
              className="signin-button"
              onClick={() => {
                onSubmit();
              }}
            >
              SIGN IN
            </button>
            <div className="signup-link-container">
              Don't have an account yet!?&nbsp;
              <Link to="/signup" className="signup-link">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
