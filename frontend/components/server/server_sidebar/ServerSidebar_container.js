import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAllServers, fetchServerMembers } from '../../../actions/server_actions';
import { fetchAllChannels } from '../../../actions/channel_actions';
import { fetchUserDMs } from '../../../actions/dm_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerSideBar from './ServerSidebar';

const mSTP = (state, ownProps) => {
  // debugger
  let home;
  if (ownProps.match.path == "/@me/home") home = true;
  return({
    home,
    currentUser: state.entities.currentUser[state.session.user.id],
    userServersIds: state.session.userServers,
    currServerId: ownProps.match.params.serverId,
    allServers: state.entities.servers,
    channels: Object.values(state.entities.channels)
  })
}

const mDTP = dispatch => {
  return ({
    fetchAllServers: (userId) => dispatch(fetchAllServers(userId)),
    // fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId)),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchUserDMs: (userId) => dispatch(fetchUserDMs(userId)),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerSideBar));