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
    return (
      <div>
        <ChannelHeader channel={this.props.currentChannel}/>

      </div>


    )
  }

}



const mSTP = (state, ownProps) => {
  const currentChannelId = this.ownProps.match.params.channelId
  return({
    currentServerId: this.ownProps.match.params.serverId,
    currentChannelId: currentChannelId,
    currentChannel: this.entities.channels[currentChannelId]

  })
}

mDTP = dispatch => {
  return({
    fetchChannel: (serverId) => dispatch(fetchChannel(serverId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId))
  })
}

export default connect(mSTP, mDTP)(Channel);

/* export default Channel; */