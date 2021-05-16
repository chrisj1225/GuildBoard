import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ServerChannelList.module.scss';

const ServerChannelItem = ({ channel, serverId }) => (
  <div>
    <NavLink
      className={styles['channel-item']}
      to={`servers/${serverId}/channels/${channel.id}`} >
      # {channel.title}
    </NavLink>
  </div>
);

export default ServerChannelItem;