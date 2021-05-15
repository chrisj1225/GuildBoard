import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { signup, login, logout } from './actions/session_actions';
import { fetchUserServers, fetchServerMembers, addServerMember } from './actions/server_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        // servers: window.servers,
        channels: window.userChannels
      },
      session: {
        session: { id: window.currentUser.id }, 
        userServers: Object.keys(window.userServers),
      }
        
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    // delete window.servers;
    delete window.userServers;
    delete window.userChannels;
  } else {
    store = configureStore();
  }

  
  // test functions:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.store = store;
  window.fetchUserServers = fetchUserServers;
  window.fetchServerMembers = fetchServerMembers;
  window.addServerMember = addServerMember;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})