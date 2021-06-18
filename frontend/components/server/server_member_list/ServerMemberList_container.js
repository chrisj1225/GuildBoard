import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { fetchServerMembers } from '../../../actions/server_actions';
import ServerMemberList from './ServerMemberList';

const mSTP = (state, ownProps) => {
  // debugger
  const currentServerId = ownProps.match.params.serverId;

  return({
    users: Object.values(state.entities.users),
    currentServer: state.entities.servers[currentServerId] 
  })
}

// const mDTP = dispatch => {
//   return ({
//     fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId))
//   })
// }

export default withRouter(connect(mSTP, null)(ServerMemberList));