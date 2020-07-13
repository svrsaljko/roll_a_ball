import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  //console.log('Mobile device to pixel ratio: ', window.devicePixelRatio);
  //console.log('Mobile device outer width: ', window.outerWidth);
  //console.log('Mobile device outer height: ', window.outerHeight);
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
