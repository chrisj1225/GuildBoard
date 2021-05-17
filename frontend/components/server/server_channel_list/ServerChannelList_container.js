import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchChannels } from '../../../actions/channel_actions';
import { fetchServerMembers } from '../../../actions/server_actions';
import { findServerChans } from '../../../util/selectors';
import { openModal } from '../../../actions/ui_actions';
import ServerChannelList from './ServerChannelList';

const mSTP = (state, ownProps) => {
  // debugger
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
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId)),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerChannelList));