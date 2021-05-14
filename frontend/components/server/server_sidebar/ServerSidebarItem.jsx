import React from 'react';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server }) => (
  <li>
    <div className={styles['server-icon']}>
      {server.title.split("")[0]}
      <div className={styles.wrapper}>
        <div className={styles.tooltip}>
          {server.title}
        </div>
      </div>
    </div>
  </li>
)

export default ServerSidebarItem;