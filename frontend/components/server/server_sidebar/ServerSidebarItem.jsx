import React from 'react';
import { NavLink } from 'react-router-dom';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server }) => (
  <NavLink 
    to={`/servers/${server.id}/channels/1`}
    className={styles['server-icon']}
    activeClassName={styles['server-icon active']} >
    {server.title.split("")[0]}
    <div className={styles.wrapper}>
      <div className={styles.tooltip}>
        {server.title}
      </div>
    </div>
    {/* <ContextMenu /> */}
  </NavLink>

)

export default ServerSidebarItem;