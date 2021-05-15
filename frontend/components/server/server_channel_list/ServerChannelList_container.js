import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchChannels } from '../../../actions/channel_actions';

import ServerChannelList from './ServerChannelList';

const mSTP = (state, ownProps) => {
  // debugger
  const currentServerId = ownProps.match.params.serverId
  return({
    channels: Object.values(state.entities.channels),
    serverId: currentServerId,
    serverTitle: state.entities.servers[currentServerId].title
  })
}

const mDTP = dispatch => {
  return({
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerChannelList));