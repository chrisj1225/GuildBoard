import React from 'react';

import ChannelHeader from '../channel_header/ChannelHeader';

import styles from './Channel.module.scss';

class Channel extends React.Component {
  constructor(props) {
    super(props)

  }

  // componentDidMount() {
  //   this.props.fetchChannel(this.props.currentChannelId)
  // }

  render () {
    if (!this.props.currentChannel) return null;

    return (
      <div className={styles['channel-container']}>
        <ChannelHeader channel={this.props.currentChannel}/>
        <div className={styles['channel-content']}>
          

        </div>

      </div>


    )
  }

}

export default Channel;