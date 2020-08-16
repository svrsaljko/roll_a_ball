import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlayerRank from './pages/PlayerRank';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './components/Routes';
import { images } from '../src/images/images';

function App() {
  return (
    <Router forceRefresh>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="/signin" component={SignIn} />
      <PublicRoute path="/signup" component={SignUp} />
      <PrivateRoute path="/playerrank" component={PlayerRank} />
    </Router>
  );
}

export default App;
