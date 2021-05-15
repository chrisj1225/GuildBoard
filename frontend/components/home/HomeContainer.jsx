import React from 'react';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';
import ServerChannelListContainer from '../server/server_channel_list/ServerChannelList_container';
import Channel from '../channel/channel/Channel';

const HomeContainer = () => (
  <>
    <ServerSideBarContainer />
    <ServerChannelListContainer />
    <Channel />
  </>
);

export default HomeContainer;