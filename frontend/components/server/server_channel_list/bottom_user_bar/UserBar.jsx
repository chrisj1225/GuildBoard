import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserBar.module.scss';

const UserBar = ({ user }) => (
  <div className={styles['user-bar-container']}>
    <span className={styles.user}>
      {user.username}
    </span>
    <div className={styles.buttons}>
      <Link 
        className={styles.btn}
        to="/" >
        <i className="fas fa-home"></i>
      </Link>
      <Link 
        className={styles.btn}
        to="/profile" >
        <i className="fas fa-cog"></i>
      </Link>
    </div>
  </div>
);

export default UserBar;