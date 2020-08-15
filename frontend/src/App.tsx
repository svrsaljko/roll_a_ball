import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlayerRank from './pages/PlayerRank';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './components/Routes';

function App() {
  //console.log('Mobile device to pixel ratio: ', window.devicePixelRatio);
  //console.log('Mobile device outer width: ', window.outerWidth);
  //console.log('Mobile device outer height: ', window.outerHeight);
  return (
    <Router>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="/signin" component={SignIn} />
      <PublicRoute path="/signup" component={SignUp} />
      <PrivateRoute path="/playerrank" component={PlayerRank} />
    </Router>
  );
}

export default App;
