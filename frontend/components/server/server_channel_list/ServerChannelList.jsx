import React from 'react';
import ServerChannelItem from './ServerChannelItem';

import styles from './ServerChannelList.module.scss';

class ServerChannelList extends React.Component {
  constructor(props) {
    super(props)

    this.clickChannel = this.clickChannel.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchChannels(this.props.serverId);
  // }

  clickChannel() {

  }

  render() {
    return (
      <div className={styles['channel-list-container']}>

        <div className={styles['server-header']}>
          <h1>{this.props.serverTitle}</h1>
        </div>

        <div className={styles['channel-list']}>
          <div className={styles['channel-header']}>
            <h2>TEXT CHANNELS</h2>
            <button>+</button>
          </div>
          <div>
            {this.props.channels.map(channel => {
              return <ServerChannelItem 
              key={channel.id}
              channel={channel}
              />
            })}
          </div>
        </div>
      </div>

    )
  }

}

export default ServerChannelList;