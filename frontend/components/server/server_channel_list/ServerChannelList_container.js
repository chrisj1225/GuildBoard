import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchChannels } from '../../../actions/channel_actions';
import { fetchServerMembers, removeServerMember } from '../../../actions/server_actions';
import { findServerChans } from '../../../util/selectors';
import { openModal } from '../../../actions/ui_actions';
import ServerChannelList from './ServerChannelList';

const mSTP = (state, ownProps) => {
  // debugger
  const currentServerId = ownProps.match.params.serverId;
  const currServer = state.entities.servers[currentServerId];
  const allChannels = Object.values(state.entities.channels);
  const currServerChans = findServerChans(currServer, allChannels);
  // debugger
  return({
    channels: currServerChans,
    serverId: currentServerId,
    currServer: currServer
  })
}

const mDTP = dispatch => {
  return({
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId)),
    removeServerMember: (membershipId) => dispatch(removeServerMember(membershipId)),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerChannelList));