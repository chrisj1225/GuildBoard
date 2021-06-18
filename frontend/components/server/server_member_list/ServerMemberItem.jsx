import React from 'react';

import styles from './ServerMemberList.module.scss';

const ServerMemberItem = ({ user, serverOwnerId }) => {
  const serverOwnerMarker = (user.id == serverOwnerId ) ? (
    <i className="fas fa-crown"></i>
  ) : null;
  return (
    <div className={styles['member-item']}>
      <h2>{user.username}</h2>
      {serverOwnerMarker}
    </div>
  )
}

export default ServerMemberItem;