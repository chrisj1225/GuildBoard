import { connect } from 'react-redux';
import { fetchUserServers, fetchServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerSideBar from './ServerSidebar';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.session.id],
    userServersIds: state.session.userServers,
    allServers: state.entities.servers
  })
}

const mDTP = dispatch => {
  return ({
    fetchUserServers: (userId) => dispatch(fetchUserServers(userId)),
    fetchServers: () => dispatch(fetchServers()),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(mSTP, mDTP)(ServerSideBar);