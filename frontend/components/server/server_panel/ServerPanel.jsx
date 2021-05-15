import React from 'react';
import { connect } from 'react-redux';

import ServerChannelListContainer from '../server_channel_list/ServerChannelList_container';
import ServerSideBarContainer from '../server_sidebar/ServerSidebar_container';

class ServerPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <ServerSideBarContainer
        
        />
        <ServerChannelListContainer />
      </div>

    )
  }
}

const mSTP = (state, ownProps) => {
  return ({

  })
}

const mDTP = (state, ownProps) => {
  return ({

  })
}

export default connect(mSTP, mDTP)(ServerPanel);