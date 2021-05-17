import React from 'react';

import styles from './ServerMemberList.module.scss';

const ServerMemberItem = ({ user }) => (
  <div className={styles['member-item']}>
    <h2>{user.username}</h2>
  </div>
)

export default ServerMemberItem;