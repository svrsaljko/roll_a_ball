import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import '../css/SignIn.css';

const SIGNUP_URL = 'http://localhost:8000/public/registration';

export default function SignUp() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    userName: '',
  });
  const onSubmit = () => {
    console.log('on submit', values);
    axios({
      method: 'post',
      url: SIGNUP_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userName: 'aakkaa',
        email: 'aakaa@aaka.com',
        password: '12345',
      },
    })
      .then((res) => {
        console.log('res: ', res.data);
      })
      .catch((err) => console.log('err: ', err));
  };
  return (
    <div>
      <Header />
      <div className="signin-container">
        <div className="signin-form">
          <label>USERNAME:</label>
          <input
            name="username"
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
