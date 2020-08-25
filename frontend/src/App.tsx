import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlayerRank from './pages/PlayerRank';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './components/Routes';
import { images } from '../src/images/images';

function App() {
  console.log('images', images);
  return (
    <Router forceRefresh>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/signin" component={SignIn} />
        <PublicRoute exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/playerrank" component={PlayerRank} />
        <Route path="" component={PageNotFound} />
        <Route path="*" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
