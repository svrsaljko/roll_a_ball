import decode from 'jwt-decode';
// import { LOGIN_URL, getLogInOptions } from '../components/Helper';
// import { REGISTER_URL, getRegisterOptions } from '../components/Helper';

// export const register = (username, email, password) => {
//   return new Promise((resolve, reject) => {
//     fetch(REGISTER_URL, getRegisterOptions(username, email, password))
//       .then((res) => res.json())
//       .then((res) => {
//         if (!res.success) {
//           resolve(res.success);
//           console.log('Username or email already exist!');
//           //this.setState({ message: "Username or email already exist!" });
//         } else {
//           resolve(res.success);

//           //this.setState({ message: "Account created successfully!" });
//           console.log('Account created successfully!');
//         }
//       })
//       .catch((error) => reject(error));
//   });
// };

// export const logIn = (usernameMail, password, history) => {
//   return new Promise((resolve, reject) => {
//     fetch(LOGIN_URL, getLogInOptions(usernameMail, password))
//       .then((res) => res.json())
//       .then((res) => {
//         resolve(res.success);
//         let { token } = res;
//         logInWithToken(token, history);
//       })
//       .catch((error) => reject(error));
//   });
// };

// export const logInWithToken = (token, history) => {
//   let username = getUsernameFromToken(token);
//   let id = getIdFromToken(token);
//   setTokenToLocalStorage(token, username, id);
//   if (isUserAuthenticated()) {
//     history.push(`/home/${username}`);
//   }
// };

// export const setExpirationDateToLocalStorage = (date) => {
//   localStorage.setItem('date', date);
// };

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

// export const logOut = (history) => {
//   localStorage.clear();
//   history.push('/');
// };

// export const getUsername = () => {
//   let username = localStorage.getItem('username', username);
//   return username;
// };

export const getUsernameFromToken = (token: string) => {
  let decodedToken: any = decode(token);

  return decodedToken.sub;
};

export const getUsername = () => {
  return getUsernameFromToken(getTokenFromLocalStorage());
};
// export const getIdFromToken = (token: string) => {
//   let decodedToken: any = decode(token);
//   let { id } = decodedToken;
//   return id;
// };

// export const setIdToLocalStorage = () => {
//   let id = getIdFromToken(token);
// };

// export const isUserAuthenticated = () => {
//   let token = localStorage.getItem('token', token);
//   let username = localStorage.getItem('username', username);
//   let _username = getUsernameFromToken(token);
//   if (username === _username) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const isLoggedIn = () => {
//   if (localStorage.getItem('token')) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const redirectToError = (history) => {
//   history.push('/404');
// };

// export const pathLog = (path) => {};
