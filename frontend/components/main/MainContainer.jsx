import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';
import ServerChannelListContainer from '../server/server_channel_list/ServerChannelList_container';
// import ServerPanel from '../server/server_panel/ServerPanel';
import ChannelContainer from '../channel/channel/Channel_container';

const HomeContainer = () => (
  <>
    <ServerSideBarContainer />
    {/* <ServerChannelListContainer />
    <ChannelContainer /> */}
  </>
);

export default HomeContainer;