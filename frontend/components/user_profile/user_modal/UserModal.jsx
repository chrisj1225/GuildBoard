import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserModal.module.scss';

class UserModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleCreateDM = this.handleCreateDM.bind(this);
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
  
  render() {
    const { otherUser, dms } = this.props;
    
    let dmId;
    const dmExist = Object.values(dms).some(dm => {
      dmId = dm.id;
      return dm.otherUser.id == otherUser.id
    });
    const dmBtn = dmExist ? (
      <div onClick={this.handleOpenDM(dmId)}
        className={styles['dm-btn']} >
        Open Messages
      </div>
    ) : (
      <div onClick={this.handleCreateDM(otherUser.id)}
        className={styles['dm-btn']} >
        Send Message
      </div>
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