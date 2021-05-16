import React from 'react';

import styles from '../ServerChannelList.module.scss';

const CreateChannelButton = ({ openModal }) => (

  <button onClick={() => openModal('create-channel')}>
    <div className={styles['create-channel']}>
      +
    </div>
  </button>

)

export default CreateChannelButton;