import { connect } from 'react-redux';
import { createServer, addServerMember } from '../../../../actions/server_actions';
import CreateServerForm from './CreateServerForm';

const mSTP = (state, ownProps) => {
  debugger
  return({
    currentUser: Object.values(state.entities.users)[0],
    server: {
      title: "",
      owner_id: state.session.id
    },
    createdServer: Object.values(state.entities.servers)[0]
  })
}

const mDTP = dispatch => {
  return ({
    createServer: (server) => dispatch(createServer(server)),
    addServerMember: (serverId, currentUser) => dispatch(addServerMember(serverId, currentUser))
  })
}

export default connect(mSTP, mDTP)(CreateServerForm);