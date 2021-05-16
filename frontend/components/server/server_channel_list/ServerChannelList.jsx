import React from 'react';
import ServerChannelItem from './ServerChannelItem';

import styles from './ServerChannelList.module.scss';

class ServerChannelList extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchChannels(this.props.serverId);
  // }

  render() {
    return (
      <div className={styles['channel-list']}>
        <h1>{this.props.serverTitle}</h1>
        <ul>
          {this.props.channels.map(channel => {
            return <ServerChannelItem 
              key={channel.id}
              channel={channel}
            />
          })}
        </ul>
      </div>

    )
  }

}

export default ServerChannelList;