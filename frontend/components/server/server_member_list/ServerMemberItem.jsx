import React from 'react';

import styles from './ServerMemberList.module.scss';

const ServerMemberItem = ({ user, currUserId, serverOwnerId, openModal }) => {
  const serverOwnerMarker = (user.id == serverOwnerId ) ? (
    <i className="fas fa-crown"></i>
  ) : null;

  const openModalBtn = (user.id === currUserId) ? null : (
    <div 
      className={styles['member-modal-btn']} 
        onClick={() => openModal({type: 'user-modal', otherUser: user})}>
      <i className="fas fa-address-card"></i>
    </div>
  );

  return (
    <div className={styles['member-item']}>
      <div className={styles['member-username']}>
        <h2>{user.username}</h2>
        {serverOwnerMarker}
      </div>
      {/* {openModalBtn} */}
      <div 
        className={styles['member-modal-btn']} 
          onClick={() => openModal({type: 'user-modal', otherUser: user})}>
        <i className="fas fa-address-card"></i>
      </div>
    </div>
  )
}

export default ServerMemberItem;