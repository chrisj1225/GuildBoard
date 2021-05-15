import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import HomeContainer from './home/HomeContainer';
import ServerModal from './server/modals/ServerModal';

const App = () => (
  <div>
    <ServerModal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <ProtectedRoute path="/servers/:serverId/channels/:channelId" component={HomeContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
)

export default App;