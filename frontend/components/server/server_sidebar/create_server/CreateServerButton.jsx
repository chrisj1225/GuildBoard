import React from 'react';

import styles from '../ServerSidebar.module.scss';

const CreateServerButton = ({ openModal }) => (
  <li>
    <button onClick={() => openModal('create')}>
      <div className={styles['server-icon']}>
        +
      </div>
    </button>
    {/* with ServerModal, instead of linking to '/create_server'
    this should dispatch the openModal action with 'create' */}
  </li>

)

export default CreateServerButton;