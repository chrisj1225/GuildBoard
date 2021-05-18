import React from 'react';

import ChatRoom from '../../message/chat_room/ChatRoom';

import styles from './MainChat.module.scss';

class MainChat extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    if (!this.props.currentChannel) return null;

    return (
      <div className={styles['main-chat-container']}>
        Main Chat Here
        <ChatRoom />
      </div>


    )
  }

}

export default MainChat;