import React from 'react';
// import { connect } from 'react-redux';

import ServerSideBarContainer from '../server/server_sidebar/ServerSidebar_container';
import ServerChannelListContainer from '../server/server_channel_list/ServerChannelList_container';
// import ServerPanel from '../server/server_panel/ServerPanel';
import ChannelContainer from '../channel/channel/Channel_container';

const MainContainer = () => (
  <>
    <ServerSideBarContainer />
    <ServerChannelListContainer />
    <ChannelContainer />
  </>
);

export default MainContainer;

// const mSTP = (state, ownProps) => {
//   debugger
//   return({
//     ownProps: ownProps
//   })
// }

// // const mDTP = dispatch => {

// // }

// export default connect(mSTP, null)(MainContainer);