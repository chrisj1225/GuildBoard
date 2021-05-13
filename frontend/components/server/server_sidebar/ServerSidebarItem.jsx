import React from 'react';

import styles from './ServerSidebarItem.module.scss';

const ServerSidebarItem = ({ server }) => (
  <li>
    <div className={styles['server-icon']}>
      {server.title}
    </div>
  </li>
)

export default ServerSidebarItem;