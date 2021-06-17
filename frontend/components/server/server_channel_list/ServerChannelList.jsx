import React from 'react';
import ServerChannelItem from './ServerChannelItem';
import CreateChannelButton from './create_channel/CreateChannelButton';
import UserBar from './bottom_user_bar/UserBar';

import styles from './ServerChannelList.module.scss';


class ServerChannelList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serverMenuShow: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.leaveServer = this.leaveServer.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.serverId !== this.props.serverId) {
  //     this.props.fetchServerMembers(this.props.serverId)
  //   }
  // }

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

  leaveServer() {
    // debugger
    if (this.props.currServer.id !== 1) {
      this.props.removeServerMember(this.props.currServer.membershipId)
        .then(() => this.props.history.push("/home"));
    }
  }

  render() {
    if (!this.props.channels.length) return null;

    const { currentUser, currServer } = this.props;

    let editServerButton;

    editServerButton = (currentUser.id === currServer.ownerId) ? (
      <span onClick={() => this.props.openModal("update-server")} >
        Edit Server
      </span>
    ) : (
      null
    )

    let createChannelButton;
    createChannelButton = (currentUser.id == currServer.ownerId) ? (
      <CreateChannelButton 
        openModal={this.props.openModal} />
    ) : null;
            

    return (
      <div className={styles['channel-list-container']}
        tabIndex="0"
        onBlur={this.closeMenu} >
        <div 
          className={styles['server-header']}
          onClick={this.toggleMenu} >
          <h1>{this.props.currServer.title}</h1>
          <i className="fas fa-caret-down"></i>
        </div>
        { this.state.serverMenuShow &&
          <div className={styles['server-menu']} >
            {editServerButton}
            <span 
              onClick={this.leaveServer} >
                Leave Server
            </span>
          </div>
        }

        <div className={styles['channel-list']}>
          <div className={styles['channel-header']}>
            <h2>TEXT CHANNELS</h2>
            {createChannelButton}
          </div>
          <div>
            {this.props.channels.map(channel => {
              return <ServerChannelItem 
              key={channel.id}
              currentUser={currentUser}
              currentChanId={this.props.channelId}
              channel={channel}
              server={this.props.currServer}
              openModal={this.props.openModal}
              deleteChannel={this.props.deleteChannel}
              history={this.props.history}
              />
            })}
          </div>
        </div>
        <UserBar user={this.props.currentUser} />
      </div>

    )
  }

}

export default ServerChannelList;