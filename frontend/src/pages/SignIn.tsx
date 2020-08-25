import React, { useState, useEffect } from 'react';
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
import { MAX_INPUT_CHAR, isEmail } from '../components/Constants';
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
  let errorMessage = '';
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      values.usernameEmail.length >= 3 &&
      values.password.length >= 8 &&
      values.password.length <= MAX_INPUT_CHAR &&
      values.usernameEmail.length <= MAX_INPUT_CHAR
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [values]);

  const [message, setMessage] = useState(' ');

  const onSubmit = () => {
    const { usernameEmail, password } = values;
    let userName, email;
    if (typeof usernameEmail !== 'undefined') {
      if (!isEmail(usernameEmail)) {
        userName = usernameEmail;
        errorMessage = 'Incorrect username or password!';
        email = null;
      } else {
        userName = null;
        errorMessage = 'Incorrect email or password!';
        email = usernameEmail;
      }
    }

    const user: IUser = {
      userName,
      email,
      password,
    };

    axios
      .post(SIGNIN_URL, user)
      .then((res) => {
        const token = res.data;
        if (token) {
          const username = getUsernameFromToken(token);
          setUserNameAndTokenToLocalStorage(token, username);

          axios.interceptors.request.use(
            function (config) {
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
        setMessage(errorMessage);
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
            <div className="message">{message}</div>
            <input
              className="signin-input"
              name="usernameEmail"
              placeholder="username, email"
              type="text"
              value={values.usernameEmail}
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
              disabled={disabled}
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
