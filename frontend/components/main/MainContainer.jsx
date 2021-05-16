import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';
import ServerChannelListContainer from '../server/server_channel_list/ServerChannelList_container';
// import ServerPanel from '../server/server_panel/ServerPanel';
import ChannelContainer from '../channel/channel/Channel_container';

import styles from './MainContainer.module.scss';

const MainContainer = () => (
  <div className={styles.main}>
    <ServerSideBarContainer />
    <ServerChannelListContainer />
    <ChannelContainer />
  </div>

);

export default MainContainer;