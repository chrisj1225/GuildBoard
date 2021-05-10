import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginContainer from './splash/login_container';
import SignupContainer from './splash/signup_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer}/>
    </Switch>
  </div>
)

export default App;