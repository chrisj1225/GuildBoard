import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from './tooltip/Tooltip';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server, currServerId }) => {
  const el = useRef(null);
  const active = (currServerId == server.id) ? true : false;

  return (
    <NavLink 
      to={`/servers/${server.id}/channels/${server.genChanId}`}
      className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
      activeClassName={styles['selected']} 
      // title={`${server.title}`}
      ref={el}
      >
      {server.title.split("")[0]}
      <Tooltip title={server.title} el={el}/>
      {/* <ContextMenu /> */}
    </NavLink>
  )
}


export default ServerSidebarItem;