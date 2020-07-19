import React from 'react';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import '../css/SignIn.css';

export default function SignIn() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const onSubmit = () => {
    console.log('on submit', values);
  };
  return (
    <div>
      <Header />
      <div className="signin-container">
        <div className="signin-form">
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
        </div>
      </div>
    </div>
  );
}
