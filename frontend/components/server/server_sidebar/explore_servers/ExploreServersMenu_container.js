import { connect } from 'react-redux';
import { fetchServers, addServerMember, removeServerMember } from '../../../../actions/server_actions';
import { closeModal } from '../../../../actions/ui_actions';
import ExploreServersMenu from './ExploreServersMenu';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.session.id],
    memberParams: {
      userId: state.session.session.id,
      joinableId: null,
      joinableType: 'Server'
    },
    servers: Object.values(state.entities.servers)
  })
}

const mDTP = dispatch => {
  return ({
    fetchServers: () => dispatch(fetchServers()),
    addServerMember: (member_params) => dispatch(addServerMember(member_params)),
    removeServerMember: (membershipId) => dispatch(removeServerMember(membershipId)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mSTP, mDTP)(ExploreServersMenu);