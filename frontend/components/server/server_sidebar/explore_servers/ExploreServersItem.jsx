import React from 'react';

import styles from './ExploreMenu.module.scss';

const ExploreServersItem = ({ server, joinServer, leaveServer }) => {
  // debugger
  const ActionButton = (server.membershipId.length == "") ? (
    <button className={styles.join} onClick={joinServer(server.id)}>Join</button>) : (
    <button className={styles.leave} onClick={leaveServer(server.id)}>Leave</button>
  );


  return (
    <li>
      <div className={styles['explore-item']}>
        <h3>{server.title}</h3>
        {ActionButton}
      </div>
    </li>
  )
}


export default ExploreServersItem;