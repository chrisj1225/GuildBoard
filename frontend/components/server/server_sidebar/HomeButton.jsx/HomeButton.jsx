import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../ServerSidebar.module.scss';

const HomeButton = () => (

  <NavLink 
    to="/@me/home"
    className={styles['server-icon']}
    activeClassName={styles['server-icon active']} >
    <img className={styles.logo} src={window.gbLogoUrl} />
  </NavLink>

)

export default HomeButton;