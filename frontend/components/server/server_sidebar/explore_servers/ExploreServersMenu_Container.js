import { connect } from 'react-redux';
import { fetchServers, addServerMember } from '../../../../actions/server_actions';
import { closeModal } from '../../../../actions/ui_actions';
import ExploreServersMenu from './ExploreServersMenu';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.id],
    memberParams: {
      userId: state.session.id,
      joinableId: null,
      joinableType: 'Server'
    },
    servers: Object.values(state.entities.allServers)
  })
}

const mDTP = dispatch => {
  return ({
    fetchServers: () => dispatch(fetchServers()),
    addServerMember: (member_params) => dispatch(addServerMember(member_params)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mSTP, mDTP)(ExploreServersMenu);