import React from 'react';

import DMHeader from '../dm_header/DMHeader';
import ChatRoomContainer from '../../message/chat_room/ChatRoom_container';

import styles from './DirectMessage.module.scss';

class DirectMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      infoFetched: false
    })

  }

  componentDidMount() {
    this.props.fetchDM(this.props.currentDMId)
      .then(res => this.setState({
          infoFetched: true
        })
      )
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentDMId !== this.props.currentDMId) {
      this.props.fetchDM(this.props.currentDMId)
        // .then(res => this.setState({
        //   infoFetched: true
        // })
    // )
    }
  }

  componentWillUnmount() {
    this.setState({
      infoFetched: false
    })
  }
  

  render () {
    if (!this.props.currentDM || !this.state.infoFetched) {
      return <div className={styles['dm-loading']}>
        Loading...
      </div>
    };

    return (
      <div className={styles['dm-container']}>
        <DMHeader dm={this.props.currentDM}/>
        <div className={styles['dm-content']}>
          <ChatRoomContainer
            key={this.props.currentDMId}
            chatType="DirectMessage" />
        </div>
      </div>
    )
  }

}

export default DirectMessage;