import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateServer } from '../../../../actions/server_actions';
import { closeModal } from '../../../../actions/ui_actions';
import UpdateServerForm from './UpdateServerForm';

const mSTP = (state, ownProps) => {
  // debugger
  const serverId = ownProps.location.pathname.split("/")[2];
  return({
    currentUser: state.entities.users[state.session.session.id],
    newServer: state.entities.servers[serverId]
  })
}

const mDTP = dispatch => {
  return ({
    updateServer: (server) => dispatch(updateServer(server)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(UpdateServerForm));