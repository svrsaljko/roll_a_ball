import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../interfaces/IUser';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import '../css/SignIn.css';

const SIGNIN_URL = 'http://localhost:8000/public/login';

export default function SignIn() {
  const [values, handleChange] = useForm({ email: '', password: '' });

  const [message, setMessage] = useState(' ');

  const onSubmit = () => {
    let testUser: IUser = {
      userName: null,
      email: 'ajde@aaka.com',
      password: '12345',
    };

    console.log('on submit', values);

    axios
      .post(SIGNIN_URL, testUser)
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  return (
    <div>
      <Header />
      <div className="signin-container">
        <div className="signin-form">
          {message}
          <input
            name="email"
            placeholder="Enter your email here... "
            type="text"
            value={values.email}
            onChange={handleChange}
          />
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
            SIGN IN
          </button>
          <Link to="/signup" className="signup-link">
            Don't have an account yet!?
          </Link>
        </div>
      </div>
    </div>
  );
}
