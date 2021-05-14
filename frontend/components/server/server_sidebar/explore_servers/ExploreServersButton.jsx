import React from 'react';

import styles from '../ServerSidebar.module.scss';

const ExploreServersButton = ({ openModal }) => (
  <li>
    <button onClick={() => openModal('explore')}>
      <div className={styles['server-icon']}>
        <i class="fas fa-compass"></i>
      </div>
    </button>
  </li>

)

export default ExploreServersButton;