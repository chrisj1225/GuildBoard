import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserModal.module.scss';

class UserModal extends React.Component {
  constructor(props) {
    super(props)
  }
  
  handleCreateDM(otherUserId) {
    return e => {
      e.preventDefault();
      this.props.createDM(otherUserId)
      .then(res => {
        this.props.closeModal();
        this.props.history.push(`/@me/${res.data.dm.id}`)
      });
    }
  }
  
  handleOpenDM(dmId) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/@me/${dmId}`)
      this.props.closeModal();
    }
  }
  
  handleGoHome() {
    // debugger
    return e => {
      e.preventDefault();
      this.props.history.push('/@me/home')
      this.props.closeModal();
    }
  }
  
  render() {
    const { currentUserId, otherUser, dms } = this.props;
    
    let dmId;
    const dmExist = Object.values(dms).some(dm => {
      dmId = dm.id;
      return dm.otherUser.id == otherUser.id
    });

    const dmBtn = (otherUser.id === currentUserId) ? (
      <div onClick={this.handleGoHome()}
        className={styles['dm-btn']} >
        Go To Messages
      </div>
    ) : (
      dmExist ? (
        <div onClick={this.handleOpenDM(dmId)}
          className={styles['dm-btn']} >
          Open Messages
        </div>
      ) : (
        <div onClick={this.handleCreateDM(otherUser.id)}
          className={styles['dm-btn']} >
          Send Message
        </div>
      )
    );

    return(
      <div className={styles['user-modal-container']}>
        <div className={styles['user-modal-header']}>          
        </div>
        <div className={styles['user-modal-info']}>
          <span className={styles['username']}>
            user: {otherUser.username}
          </span>
          {dmBtn}
        </div>
      </div>
    )
  }
}

export default UserModal;