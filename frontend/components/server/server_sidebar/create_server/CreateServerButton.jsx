import React from 'react';

import styles from '../ServerSidebar.module.scss';

const CreateServerButton = ({ openModal }) => (

  <button onClick={() => openModal('create')}>
    <div className={styles['server-icon']}>
      +
    </div>
  </button>

)

export default CreateServerButton;