import { connect } from 'react-redux';
import { createServer } from '../../../../actions/server_actions';
import CreateServerForm from './CreateServerForm';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.id],
    newServer: {
      title: ""
    }
  })
}

const mDTP = dispatch => {
  return ({
    createServer: (server) => dispatch(createServer(server))
  })
}

export default connect(mSTP, mDTP)(CreateServerForm);