import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import LoginContainer from './splash/login_container';
import SignupContainer from './splash/signup_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer}/>
    </Switch>
  </div>
)

export default App;