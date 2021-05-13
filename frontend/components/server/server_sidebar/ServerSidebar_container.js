import { connect } from 'react-redux';
import { fetchUserServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerSideBar from './ServerSidebar';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers)

  })
}

const mDTP = dispatch => {
  return ({
    fetchUserServers: (userId) => dispatch(fetchUserServers(userId)),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(mSTP, mDTP)(ServerSideBar);