import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchServerInfo } from '../../../actions/server_actions';
import Channel from './Channel';

const mSTP = (state, ownProps) => {
  const currentChannelId = ownProps.match.params.channelId
  return({
    currentServerId: ownProps.match.params.serverId,
    currentChannelId: currentChannelId,
    currentChannel: state.entities.channels[currentChannelId]

  })
}

const mDTP = dispatch => {
  return({
    fetchServerInfo: (serverId) => dispatch(fetchServerInfo(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(Channel));