import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../interfaces/IUser';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import {
  setUserNameAndTokenToLocalStorage,
  getUsernameFromToken,
} from '../service/authService';
import '../css/SignIn.css';

function PlayerRank() {
  return (
    <div>
      <Header />
      player rank
    </div>
  );
}
export default PlayerRank;
