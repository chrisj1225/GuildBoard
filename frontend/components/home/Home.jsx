import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles['home-container']}>
    <ServerSideBarContainer />
    <div className={styles['home-content']}>
      Welcome to the Home page!
      <br />
      There is nothing here yet... Home will hold all direct message conversations.
      <br />
      For now, please try clicking one of the server buttons in the ServerSideBar to the left!
      <br />
      <ul>
        <li>
          Still working on getting ServerSidebar to render on login
        </li>

      </ul>
    </div>

  </div>

);

export default Home;