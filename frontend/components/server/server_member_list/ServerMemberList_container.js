import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { fetchServerMembers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerMemberList from './ServerMemberList';

const mSTP = (state, ownProps) => {
  const currentServerId = ownProps.match.params.serverId;

  return({
    users: Object.values(state.entities.users),
    currentServer: state.entities.servers[currentServerId],
  })
}

const mDTP = dispatch => {
  return ({
    // fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId)),
    openModal: (modalName) => dispatch(openModal(modalName))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerMemberList));