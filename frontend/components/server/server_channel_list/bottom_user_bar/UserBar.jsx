import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserBar.module.scss';

const UserBar = ({ user }) => (
  <div className={styles['user-bar-container']}>
    <span className={styles.user}>
      {user.username}
    </span>
    <Link 
      className={styles.cog}
      to="/@me" >
      <i className="fas fa-cog"></i>
    </Link>
  </div>
);

export default UserBar;