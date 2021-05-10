import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Splash from './splash/splash';
import LoginContainer from './splash/login_container';


const App = () => (
  <div>
    <h1>Guild Board</h1>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" />
    </Switch>
  </div>
)

export default App;