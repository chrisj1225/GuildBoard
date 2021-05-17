import { connect } from 'react-redux';
import { createServer, addServerMember } from '../../../../actions/server_actions';
import { closeModal } from '../../../../actions/ui_actions';
import CreateServerForm from './CreateServerForm';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.session.id],
    newServer: {
      title: ""
    }
  })
}

const mDTP = dispatch => {
  return ({
    createServer: (server) => dispatch(createServer(server)),
    addServerMember: (member_params, userId) => dispatch(addServerMember(member_params, userId)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mSTP, mDTP)(CreateServerForm);