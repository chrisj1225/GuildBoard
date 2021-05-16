import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../ServerSidebar.module.scss';

const HomeButton = () => (

  <NavLink 
    to='/home'
    className={styles['server-icon']}
    activeClassName={styles['server-icon active']} >
    H
  </NavLink>

)

export default HomeButton;