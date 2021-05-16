import React from 'react';
import ServerChannelItem from './ServerChannelItem';
import CreateChannelButton from './create_channel/CreateChannelButton';

import styles from './ServerChannelList.module.scss';


class ServerChannelList extends React.Component {
  constructor(props) {
    super(props)

  }
  // componentDidMount() {
  //   this.props.fetchChannels(this.props.serverId);
  // }

  render() {
    // debugger
    if (!this.props.channels.length) return null;
    return (
      <div className={styles['channel-list-container']}>

        <div className={styles['server-header']}>
          <h1>{this.props.serverTitle}</h1>
        </div>

        <div className={styles['channel-list']}>
          <div className={styles['channel-header']}>
            <h2>TEXT CHANNELS</h2>
            <CreateChannelButton 
              openModal={this.props.openModal} />
          </div>
          <div>
            {this.props.channels.map(channel => {
              return <ServerChannelItem 
              key={channel.id}
              channel={channel}
              serverId={this.props.serverId}
              />
            })}
          </div>
        </div>
      </div>

    )
  }

}

export default ServerChannelList;