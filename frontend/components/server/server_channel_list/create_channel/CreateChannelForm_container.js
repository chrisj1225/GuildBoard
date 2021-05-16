import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createChannel } from '../../../../actions/channel_actions';
import { closeModal } from '../../../../actions/ui_actions';
import CreateChannelForm from './CreateChannelForm';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.session.id],
    serverId: ownProps.location.pathname.split("/")[2],
    newChannel: {
      title: "",
      serverId: ownProps.location.pathname.split("/")[2],
      ownerId: state.session.session.id
    }
  })
}

const mDTP = dispatch => {
  return ({
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(CreateChannelForm));