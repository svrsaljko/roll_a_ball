import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../interfaces/IUser';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { isSignedIn } from '../service/authService';
import '../css/SignIn.css';
// import { registerTestUsers } from '../testScript/testUsersRegistration';
import { MAX_INPUT_CHAR, isEmail } from '../components/Constants';

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

  const { userName, email, password } = values;
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const emailValidation = () => {
      if (
        isEmail(email) &&
        email.length >= 8 &&
        email.length <= MAX_INPUT_CHAR
      ) {
        return true;
      } else return false;
    };
    if (
      userName.length >= 3 &&
      userName.length <= MAX_INPUT_CHAR &&
      emailValidation() &&
      password.length >= 8 &&
      password.length <= MAX_INPUT_CHAR
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userName, email, password]);

  const onSubmit = () => {
    const user: IUser = {
      userName,
      email,
      password,
    };

    axios
      .post(SIGNUP_URL, user)
      .then((res) => {
        setMessage(res.data.message);
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 5000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
  return (
    <div>
      <Header />

      {isSignedIn() ? (
        <div></div>
      ) : (
        <div className="signin-container">
          <div className="signin-form">
            <div className="message">{message}</div>

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
              disabled={disabled}
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
