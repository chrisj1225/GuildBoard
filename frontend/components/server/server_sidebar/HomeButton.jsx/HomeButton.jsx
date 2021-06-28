import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../ServerSidebar.module.scss';

const HomeButton = ({path}) => {
  const active = (path === "@me");
  return (
    <NavLink 
      to="/@me/home"
      // className={styles['server-icon']}
      className={`${styles['server-icon']} ${styles[`${active ? 'selected' : null}`]}`}
      activeClassName={styles['server-icon selected']} >
      <img className={styles.logo} src={window.gbLogoUrl} />
    </NavLink>
  )

}



export default HomeButton;