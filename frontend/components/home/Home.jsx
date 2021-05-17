import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles['home-container']}>
    <ServerSideBarContainer />
    <div className={styles['home-content']}>
      Welcome to the Home page!
      
    </div>

  </div>

);

export default Home;