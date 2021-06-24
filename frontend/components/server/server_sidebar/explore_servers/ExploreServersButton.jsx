import React from 'react';

import styles from '../ServerSidebar.module.scss';

const ExploreServersButton = ({ openModal }) => (

  <button onClick={() => openModal({type: "explore"})}>
    <div className={styles['create-explore-btn']}>
      <i className="fas fa-compass"></i>
    </div>
  </button>


)

export default ExploreServersButton;