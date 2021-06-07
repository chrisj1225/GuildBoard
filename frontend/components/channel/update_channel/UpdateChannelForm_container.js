import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateChannel } from '../../../actions/channel_actions';
import { closeModal } from '../../../../actions/ui_actions';
import UpdateChannelForm from './UpdateChannelForm';

const mSTP = (state, ownProps) => {
  // debugger
  const serverId = ownProps.location.pathname.split("/")[2];
  return({
    currentUser: state.entities.currentUser[state.session.session.id],
    newServer: state.entities.servers[serverId]
  })
}

const mDTP = dispatch => {
  return ({
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(UpdateChannelForm));