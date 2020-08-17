import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import '../css/SignIn.css';
import { registerTestUsers } from '../testScript/testUsersRegistration';

const SIGNUP_URL = 'http://localhost:8000/public/registration';

export default function SignUp() {
  const [values, handleChange] = useForm({
    userName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(' ');

  const onSubmit = () => {
    // registerTestUsers();
    // console.log('on submit', values);
    axios({
      method: 'post',
      url: SIGNUP_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      //UBACI STVORENOG USERA, REDIRECT ITD.. public private routes
      data: {
        userName: 'user25',
        email: 'user25@test-user.com',
        password: '12345',
      },
    })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) =>
        console.log('err: ', setMessage(err.response.data.message))
      );
  };
  return (
    <div>
      <Header />
      <div className="signin-container">
        <div className="signin-form">
          <div>{message}</div>
          <label>USERNAME:</label>
          <input
            name="userName"
            placeholder="Enter your username here... "
            type="text"
            value={values.userName}
            onChange={handleChange}
          />
          <label>EMAIL:</label>
          <input
            name="email"
            placeholder="Enter your email here... "
            type="text"
            value={values.email}
            onChange={handleChange}
          />
          <label> PASSWORD: </label>
          <input
            name="password"
            placeholder="Enter your password here... "
            type="text"
            value={values.password}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            SIGN UP
          </button>
          <Link to="/signup" className="signup-link">
            Already have an account!?
          </Link>
        </div>
      </div>
    </div>
  );
}
