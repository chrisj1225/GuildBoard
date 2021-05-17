import React from 'react';

import styles from './MainChat.module.scss';

class MainChat extends React.Component {
  constructor(props) {
    super(props)

  }


  render () {
    if (!this.props.currentChannel) return null;

    return (
      <div className={styles['main-chat-container']}>
        Main Chat Here
      </div>


    )
  }

}

export default MainChat;