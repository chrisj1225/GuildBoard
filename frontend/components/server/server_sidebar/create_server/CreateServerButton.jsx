import React from 'react';

import styles from '../ServerSidebar.module.scss';

const CreateServerButton = ({ openModal }) => (

  <button onClick={() => openModal({type: 'create-server'})}>
    <div className={styles['create-explore-btn']}>
      <i className="fas fa-plus"></i>
    </div>
  </button>

)

export default CreateServerButton;