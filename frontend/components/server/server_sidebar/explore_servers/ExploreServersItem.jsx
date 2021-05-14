import React from 'react';

import styles from './ExploreMenu.module.scss';

const ExploreServersItem = ({ server, joinServer }) => (
  <li>
    <div className={styles['explore-item']}>
      <h3>{server.title}</h3>
      <button onClick={joinServer(server.id)}>Join</button>

    </div>
  </li>
)

export default ExploreServersItem;