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
      >
      {server.title.split("")[0]}
      {/* <div className={styles.wrapper}>
        <div className={styles.tooltip}>
          {server.title}
        </div>
      </div> */}
      {/* <ContextMenu /> */}
    </NavLink>
  )
}


export default ServerSidebarItem;