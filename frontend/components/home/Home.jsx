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
        If you're new here, try exploring the servers <i className="fas fa-compass"></i> our users have already created
        <br />
        or feel free to create <i className="fas fa-plus"></i> your own server for your interests and friends.
        <br /><br />
        At any time, you can enter a server by clicking its icon <i className="fas fa-stop-circle"></i> in the server sidebar 
        <br />
        to the left and start live chatting with other server members right away.
        <br /><br />
        To send private messages to a server member, you can click the profile icon <i className="fas fa-address-card"></i>
        <br />
        next to their name and start/open a direct message session with them.
      </h2>
        <br /><br />
      <h2>Please know we're constantly working to improve the site!</h2>
        <br />
      {/* <img className={styles['bob-gif']} src={window.bobUrl} /> */}
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