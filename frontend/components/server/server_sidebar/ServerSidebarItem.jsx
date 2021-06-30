import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from './tooltip/Tooltip';
// import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerSidebar.module.scss';

const ServerSidebarItem = ({ server, currServerId }) => {
  const [tooltip, setTooltip] = useState(false);
  const showTooltip = () => setTooltip(true);
  const hideTooltip = () => setTooltip(false);

  const el = useRef(null);
  const active = (currServerId == server.id) ? true : false;

  return (
    <div className={styles['server-icon-wrapper']}>
      <NavLink 
        to={`/servers/${server.id}/channels/${server.genChanId}`}
        className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
        activeClassName={styles['selected']} 
        onMouseOver={showTooltip}
        onFocus={showTooltip}
        onMouseOut={hideTooltip}
        onBlur={hideTooltip}
        ref={el}
        >
        {server.title.split("")[0]}
      </NavLink>
      {tooltip && <Tooltip title={server.title} el={el}/>}
      {/* <ContextMenu /> */}
    </div>
  )
}


export default ServerSidebarItem;