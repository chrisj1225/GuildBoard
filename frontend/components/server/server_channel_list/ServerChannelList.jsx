import React from 'react';
import ServerChannelItem from './ServerChannelItem';
import CreateChannelButton from './create_channel/CreateChannelButton';

import styles from './ServerChannelList.module.scss';


class ServerChannelList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serverMenuShow: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchChannels(this.props.serverId);
  // }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    if (prevProps.serverId !== this.props.serverId) {
      this.props.fetchServerMembers(this.props.serverId)
    }
  }

  toggleMenu() {
    const currSetting = this.state.serverMenuShow;
    this.setState({
      serverMenuShow: !currSetting
    })
  }

  closeMenu() {
    this.setState({
      serverMenuShow: false
    })
  }

  render() {
    // debugger
    if (!this.props.channels.length) return null;
    return (
      <div className={styles['channel-list-container']}
        tabIndex="0"
        onBlur={this.closeMenu} >

        <div 
          className={styles['server-header']}
          onClick={this.toggleMenu} >
          <h1>{this.props.serverTitle}</h1>
          <i className="fas fa-caret-down"></i>
        </div>
        { this.state.serverMenuShow &&
          <div 
            className={styles['server-menu']} >
            <span>Edit Server</span>
            <span 
               >
                Leave Server
            </span>
          </div>
        }

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