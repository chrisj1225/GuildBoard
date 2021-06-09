import React, { useRef }  from 'react';
import { NavLink } from 'react-router-dom';
import ContextMenu from '../../context_menu/ContextMenu';

import styles from './ServerChannelList.module.scss';

const ServerChannelItem = ({ channel, server, currentUser, openModal, deleteChannel, history }) => {
  const channelRef = useRef(null);

  const destroyChannel = (channelId) => {
    if (channelId === server.genChanId) {
      alert("You cannot delete the general channel");
    } else {
      deleteChannel(channelId)
        .then(history.push(`/servers/${server.id}/channels/${server.genChanId}`));
    }
  }

  let ChannelMenu;
  ChannelMenu = (currentUser.id == channel.ownerId) ? (
    <div>
      {/* <NavLink to={`/servers/${serverId}/channels/${channel.id}`}>Open Channel</NavLink> */}
      <li onClick={() => openModal("update-channel")}>Edit Channel</li>
      <li id={styles['delete-btn']} onClick={() => destroyChannel(channel.id)}>Delete Channel</li>
    </div>
  ) : (
    <div>
      <p>You do not have permissions to edit or delete this channel</p>
    </div>
  )

  return(
    <div ref={channelRef}>
      <NavLink
        className={styles['channel-item']}
        activeClassName={styles['selected']}
        to={`${channel.id}`} >
        {/* to={`servers/${serverId}/channels/${channel.id}`} > */}
        # {channel.title}
      </NavLink>
      <ContextMenu menu={ChannelMenu} parentRef={channelRef} />
      {/* <ContextMenu type="channel" channel={channel}/> */}
    </div>
  )
};

export default ServerChannelItem;