import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchChannels, fetchAllChannels } from '../../../actions/channel_actions';
import { findServerChans } from '../../../util/selectors';

import ServerChannelList from './ServerChannelList';

const mSTP = (state, ownProps) => {
  const currentServerId = ownProps.match.params.serverId;
  const currServer = state.entities.servers[currentServerId];
  const allUserChannels = Object.values(state.entities.channels);
  const currServerChans = findServerChans(currServer, allUserChannels);
  // debugger
  return({
    channels: currServerChans,
    serverId: currentServerId,
    serverTitle: currServer.title
  })
}

const mDTP = dispatch => {
  return({
    // fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerChannelList));