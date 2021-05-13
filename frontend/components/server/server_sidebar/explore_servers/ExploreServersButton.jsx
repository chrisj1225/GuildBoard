import React from 'react';

import styles from '../ServerSidebar.module.scss';

const ExploreServersButton = ({ openModal }) => (
  <li>
    <button onClick={() => openModal('explore')}>
      <div className={styles['server-icon']}>
        Explore Servers
      </div>
    </button>
  </li>

)

export default ExploreServersButton;