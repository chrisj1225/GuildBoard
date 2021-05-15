import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchServerMembers } from '../../../actions/server_actions';
import Channel from './Channel';

const mSTP = (state, ownProps) => {
  // debugger
  const currentChannelId = ownProps.match.params.channelId
  return({
    currentServerId: ownProps.match.params.serverId,
    currentChannelId: currentChannelId,
    currentChannel: state.entities.channels[currentChannelId]

  })
}

const mDTP = dispatch => {
  return({
    fetchChannel: (serverId) => dispatch(fetchChannel(serverId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(Channel));