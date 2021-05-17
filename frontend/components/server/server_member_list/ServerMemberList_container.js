import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchServerMembers } from '../../../actions/server_actions';
import ServerMemberList from './ServerMemberList';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    users: Object.values(state.entities.users),
    currentServerId: ownProps.match.params.serverId, 
  })
}

const mDTP = dispatch => {
  return ({
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerMemberList));