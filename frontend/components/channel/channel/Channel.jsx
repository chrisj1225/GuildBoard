import React from 'react';

import ChannelHeader from '../channel_header/ChannelHeader';
import ServerMemberListContainer from '../../server/server_member_list/ServerMemberList_container';
// import MainChatContainer from '../main_chat/MainChat_container';
import ChatRoomContainer from '../../message/chat_room/ChatRoom_container';

import styles from './Channel.module.scss';

class Channel extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchServerInfo(this.props.currentServerId);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentServerId !== this.props.currentServerId) {
      this.props.fetchServerInfo(this.props.currentServerId);
    }
  }
  

  render () {
    if (!this.props.currentChannel) return null;
    if (this.props.match.params.serverId )

    return (
      <div className={styles['channel-container']}>
        <ChannelHeader channel={this.props.currentChannel}/>
        <div className={styles['channel-content']}>
          {/* <MainChatContainer /> */}
          <ChatRoomContainer
            key={this.props.currentChannel.id} />
          <ServerMemberListContainer />
        </div>
      </div>
    )
  }

}

export default Channel;