import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ServerListContainer from './server/server_list/ServerList_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <Route exact path="/server_explore" component={ServerListContainer} />
    </Switch>
  </div>
)

export default App;