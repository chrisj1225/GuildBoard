import React from 'react';

import styles from './ServerMemberList.module.scss';

const ServerMemberItem = ({ user, serverOwnerId, openModal }) => {
  const serverOwnerMarker = (user.id == serverOwnerId ) ? (
    <i className="fas fa-crown"></i>
  ) : null;
  return (
    <div className={styles['member-item']}>
      <div className={styles['member-username']}>
        <h2>{user.username}</h2>
        {serverOwnerMarker}
      </div>
      <div 
        className={styles['member-modal-btn']}onClick={() => openModal('user-modal')}>
        <i className="fas fa-address-card"></i>
      </div>
    </div>
  )
}

export default ServerMemberItem;