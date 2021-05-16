import React from 'react';

import styles from './ServerChannelList.module.scss';

const ServerChannelItem = ({ channel }) => (
  <div>
    <h2 className={styles['channel-item']}>
      # {channel.title}
    </h2>
  </div>
);

export default ServerChannelItem;