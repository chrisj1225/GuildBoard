import React from 'react';
import ContextMenu from '../../context_menu/ContextMenu';

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
      {/* <ContextMenu /> */}
    </div>
  </li>
)

export default ServerSidebarItem;