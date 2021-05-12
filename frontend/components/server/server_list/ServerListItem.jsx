import React from 'react';

const ServerListItem = ({ server }) => (
  <li>
    <h3>{server.title}</h3>
    <p>{server.description}</p>
    {/* Add button to join/leave server. Need memberships set up */}
  </li>
)

export default ServerListItem;