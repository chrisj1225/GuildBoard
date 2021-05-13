import React from 'react';

const ExploreServersItem = ({ server, joinServer }) => (
  <li>
    <h3>{server.title}</h3>
    <button onClick={joinServer(server.id)}>Join</button>
  </li>
)

export default ExploreServersItem;