import React from 'react';

import styles from '../ServerSidebar.module.scss';

const ExploreServersButton = ({ openModal }) => (

  <button onClick={() => openModal('explore')}>
    <div className={styles['server-icon']}>
      <i className="fas fa-compass"></i>
    </div>
  </button>


)

export default ExploreServersButton;