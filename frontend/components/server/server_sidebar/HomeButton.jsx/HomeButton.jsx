import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '../tooltip/Tooltip';
import styles from '../ServerSidebar.module.scss';

const HomeButton = ({path}) => {
  const [tooltip, setTooltip] = useState(false);
  const showTooltip = () => setTooltip(true);
  const hideTooltip = () => setTooltip(false);

  const el = useRef(null);

  const active = (path === "@me");
  return (
    <div className={styles['server-icon-wrapper']}>
      <NavLink to="/@me/home"
        className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
        activeClassName={styles['server-icon selected']}
        onMouseOver={showTooltip}
        onFocus={showTooltip}
        onMouseOut={hideTooltip}
        onBlur={hideTooltip}
        ref={el}>
        <img className={styles.logo} src={window.gbLogoUrl} />
      </NavLink>
      {tooltip && <Tooltip title="Home" el={el}/>}
    </div>
  )

}



export default HomeButton;