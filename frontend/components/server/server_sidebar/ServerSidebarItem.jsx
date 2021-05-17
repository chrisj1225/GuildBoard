import React from 'react';
import { NavLink } from 'react-router-dom';
import { findGenChanId } from '../../../util/selectors';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server, channels }) => {
  // Finding id of a server's general channel:
  // Find more elegant way (maybe store in backend & retrieve via redux state)
  // const genChanId = findGenChanId(server, channels);

  // Styling: Fix tooltip & get activeClassName to work
  // Adding border-radius when server is selected && 
  // when switching channels within server.
  return (
    <NavLink 
      to={`/servers/${server.id}/channels/${server.genChanId}`}
      className={styles['server-icon']}
      activeClassName={styles['selected']} 
      >
      {server.title.split("")[0]}
      <div className={styles.wrapper}>
        <div className={styles.tooltip}>
          {server.title}
        </div>
      </div>
      {/* <ContextMenu /> */}
    </NavLink>
  )
}


export default ServerSidebarItem;