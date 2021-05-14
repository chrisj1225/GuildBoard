import { connect } from 'react-redux';
import { fetchServerMembers } from '../../../actions/server_actions';
import ServerMemberList from './ServerMemberList';

const mSTP = (state) => {
  return({
    users: Object.values(state.entities.users)
  })
}

const mDTP = dispatch => {
  return ({
    fetchServerMembers: () => dispatch(fetchServerMembers())
  })
}

export default connect(mSTP, mDTP)(ServerMemberList)