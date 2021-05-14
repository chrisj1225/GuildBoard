import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ServerSideBarContainer from './server/server_sidebar/ServerSidebar_container';
import ServerMemberListContainer from './server/server_member_list/ServerMemberList_container';
import ServerModal from './server/modals/ServerModal';

const App = () => (
  <div>
    <ServerModal />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <ProtectedRoute path="/servers" component={ServerSideBarContainer} />
      <ProtectedRoute path="/servers/:serverId" component={ServerMemberListContainer} />
      
    </Switch>
  </div>
)

export default App;