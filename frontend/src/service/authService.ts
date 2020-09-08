import decode from 'jwt-decode';
import axios from 'axios';

export const setUserNameAndTokenToLocalStorage = (
  token: string,
  username: string
) => {
  localStorage.setItem('token', token);
  localStorage.setItem('username', username);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};
export const getUsernameFromLocalStorage = () => {
  return localStorage.getItem('username');
};

export const signOut = () => {
  localStorage.setItem('token', null);
  localStorage.setItem('username', null);
};

export const getUsernameFromToken = (token: string) => {
  let decodedToken: any;
  try {
    decodedToken = decode(token);
  } catch (error) {
    decodedToken = null;
    return null;
  }

  return decodedToken.sub;
};

export const getUsername = () => {
  return getUsernameFromToken(getTokenFromLocalStorage());
};

export const isSignedIn = () => {
  const token = getTokenFromLocalStorage();
  const username = getUsernameFromLocalStorage();
  const usernameFromToken = getUsernameFromToken(token);
  if (usernameFromToken === null) {
    return false;
  }
  if (username === usernameFromToken) {
    return true;
  } else return false;
};
