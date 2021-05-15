import { connect } from 'react-redux';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchServerMembers } from '../../../actions/server_actions';
import Channel from './Channel';

// const mSTP = state => {
//   return({


//   })
// }

const mDTP = dispatch => {
  return({
    fetchChannel: (serverId) => dispatch(fetchChannel(serverId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId))
  })
}

export default connect(null, mDTP)(Channel);