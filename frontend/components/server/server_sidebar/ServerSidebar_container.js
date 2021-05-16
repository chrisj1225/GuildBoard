import { connect } from 'react-redux';
import { fetchAllServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerSideBar from './ServerSidebar';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.session.id],
    userServersIds: state.session.userServers,
    allServers: state.entities.servers,
    channels: Object.values(state.entities.channels)
  })
}

const mDTP = dispatch => {
  return ({
    fetchAllServers: (userId) => dispatch(fetchAllServers(userId)),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(mSTP, mDTP)(ServerSideBar);