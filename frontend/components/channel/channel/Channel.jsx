import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchServerMembers } from '../../../actions/server_actions';

import ChannelHeader from '../channel_header/ChannelHeader';

class Channel extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchChannel(this.props.currentChannelId)
  }


  render () {
    if (!this.props.currentChannel) return null;

    return (
      <div>
        <ChannelHeader channel={this.props.currentChannel}/>

      </div>


    )
  }

}



const mSTP = (state, ownProps) => {
  debugger
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

export default connect(mSTP, mDTP)(Channel);

/* export default Channel; */