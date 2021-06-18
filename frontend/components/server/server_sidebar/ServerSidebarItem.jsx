import React from 'react';
import { NavLink } from 'react-router-dom';
import { findGenChanId } from '../../../util/selectors';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server, currServerId }) => {
  
  const active = (currServerId == server.id) ? true : false;

  return (
    <NavLink 
      to={`/servers/${server.id}/channels/${server.genChanId}`}
      className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
      activeClassName={styles['selected']} 
      // title={`${server.title}`}
      >
      {server.title.split("")[0]}
      <div className={styles.wrapper}>
        <span className={styles.tooltip}>
          {server.title}
        </span>
      </div>
      {/* <ContextMenu /> */}
    </NavLink>
  )
}


export default ServerSidebarItem;