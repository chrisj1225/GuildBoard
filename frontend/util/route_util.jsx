import React from 'react';
import { Route, Redirect, withRouter } from "react-router";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => 
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      // Change Redirect to "/servers/:general/channels/:general" once those components are made"
    }
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}

export const AuthRoute = withRouter(
  connect(
    mapStateToProps, 
    null
  )(Auth)
);