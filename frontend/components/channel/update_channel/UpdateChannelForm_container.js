import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateChannel } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/ui_actions';
import UpdateChannelForm from './UpdateChannelForm';

const mSTP = (state, ownProps) => {
  // debugger
  const channelId = ownProps.location.pathname.split("/")[4];
  const serverId = ownProps.location.pathname.split("/")[2];
  return({
    currServer: state.entities.servers[serverId],
    currentUser: state.entities.currentUser[state.session.user.id],
    newChannel: state.entities.channels[channelId]
  })
}

const mDTP = dispatch => {
  return ({
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(UpdateChannelForm));