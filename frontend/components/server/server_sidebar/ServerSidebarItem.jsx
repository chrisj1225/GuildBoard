import React from 'react';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server }) => {
  // debugger
  return (
  <li>
    <div className={styles['server-icon']}>
      {server.title.split("")[0]}
    </div>
  </li>
    
  )
}


export default ServerSidebarItem;