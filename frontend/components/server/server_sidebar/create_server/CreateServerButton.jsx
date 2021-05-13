import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../ServerSidebar.module.scss';

const CreateServerButton = () => (
  <li>
    <Link to="/create_server">
      <div className={styles['server-icon']}>
        Create Server

      </div>
    </Link>

  </li>

)

export default CreateServerButton;