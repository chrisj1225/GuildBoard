import { connect } from 'react-redux';

import ServerChannelList from './ServerChannelList';

const mSTP = (state, ownProps) => {
  const currentServerId = ownProps.match.params.serverId
  return({
    channels: Object.values(state.entities.channels),
    serverId: currentServerId,
    serverTitle: state.servers[currentServerId]
  })
}

const mDTP = dispatch => {
  return({
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
  })
}

export default connect(mSTP, mDTP)(ServerChannelList);