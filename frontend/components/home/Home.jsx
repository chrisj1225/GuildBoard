import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';
import DMSidebarListContainer from '../direct_message/dm_sidebar/DMSidebarList_container';
import DirectMessageContainer from '../direct_message/dm/DirectMessage_container';

import styles from './Home.module.scss';

const Home = ({ currentUser, currDmId }) => {

  const HomeDMContent = (currDmId == "home") ? (
    <div className={styles['home-content']}>
      <h1>Welcome to GuildBoard, {currentUser.username}!</h1>
      <br />
      <h2>
        The home page is currently under construction.
        <br />
        Eventually this will hold direct messages with other users!
      </h2>
      <br /><br />
      <h2>
        For now, please try entering one of our servers to the left!
      </h2>
      <br /><br />
      <h2>We're working on it!</h2>
      <img className={styles['bob-gif']} src={window.bobUrl} />
    </div>
  ) : (
    <DirectMessageContainer />
  )


  return (
    <div className={styles['home-container']}>
      <ServerSideBarContainer />
      <DMSidebarListContainer />
      {HomeDMContent}
    </div>
  );

};

export default Home;