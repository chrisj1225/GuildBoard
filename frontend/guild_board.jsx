import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';

document.addEventListener("DomContentLoaded", () => {
  const store = configureStore()
  
  //test functions:
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to GuildBoard</h1>, root)
})