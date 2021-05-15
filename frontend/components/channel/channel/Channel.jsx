import React from 'react';

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

export default Channel;