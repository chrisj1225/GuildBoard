import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles['home-container']}>
    <ServerSideBarContainer />
    <div className={styles['home-content']}>
      <h1>Welcome to GuildBoard!</h1>
      <br />
      <h2>
        It's not much yet but this home page will eventually hold all direct message conversations!
      </h2>
      <br /><br />
      <h2>
        For now, please try clicking one of the server buttons in the ServerSideBar to the left!
      </h2>
      <br /><br />
      <h1>We're working on it!</h1>
      <img className={styles['bob-gif']} src={window.bobUrl} />
    </div>

  </div>

);

export default Home;