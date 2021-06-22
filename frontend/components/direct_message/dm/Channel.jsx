import React from 'react';

import ChannelHeader from '../channel_header/ChannelHeader';
import ServerMemberListContainer from '../../server/server_member_list/ServerMemberList_container';
// import MainChatContainer from '../main_chat/MainChat_container';
import ChatRoomContainer from '../../message/chat_room/ChatRoom_container';

import styles from './Channel.module.scss';

class Channel extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      infoFetched: false
    })

  }

  componentDidMount() {
    this.props.fetchServerInfo(this.props.currentServerId)
      .then(res => this.setState({
          infoFetched: true
        })
      )
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentServerId !== this.props.currentServerId) {
      this.props.fetchServerInfo(this.props.currentServerId);
    }
  }

  componentWillUnmount() {
    this.setState({
      infoFetched: false
    })
  }
  

  render () {
    if (!this.props.currentChannel || !this.state.infoFetched) {
      return <div className={styles['channel-loading']}>
        Loading...
      </div>
    };
    
      if (this.props.match.params.serverId )

    return (
      <div className={styles['channel-container']}>
        <ChannelHeader channel={this.props.currentChannel}/>
        <div className={styles['channel-content']}>
          {/* <MainChatContainer /> */}
          <ChatRoomContainer
            key={this.props.currentChannel.id}
            chatType="Channel" />
          <ServerMemberListContainer />
        </div>
      </div>
    )
  }

}

export default Channel;