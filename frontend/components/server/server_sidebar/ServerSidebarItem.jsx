import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { findGenChanId } from '../../../util/selectors';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server, currServerId }) => {
  const el = useRef(null);
  const active = (currServerId == server.id) ? true : false;

  if (el && el.current) {
    const dims = el.current.getBoundingClientRect();
  } else {
    return null;
  }

  return (
    <NavLink 
      to={`/servers/${server.id}/channels/${server.genChanId}`}
      className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
      activeClassName={styles['selected']} 
      // title={`${server.title}`}
      ref={el}
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