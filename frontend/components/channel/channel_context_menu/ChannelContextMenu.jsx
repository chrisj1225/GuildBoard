import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { deleteChannel } from '../../../actions/channel_actions';
import { openModal } from '../../../actions/ui_actions';

const ChannelContextMenu = ({ channel, currChannel, currServer, currentUser }) => {

  const destroyChannel = (channelId) => {
    if (channelId === currServer.genChanId) {
      alert("You cannot delete the general channel");
    } else {
      deleteChannel(channelId)
        .then(history.push(`/servers/${currServer.id}/channels/${currServer.genChanId}`));
    }
  }

  let ChannelMenu;
  ChannelMenu = (currentUser.id == currChannel.ownerId) ? (
    <div>
      <li onClick={() => openModal("update-channel")}>Edit Channel</li>
      <li onClick={() => destroyChannel(currChannel.id)}>Delete Channel</li>
    </div>
  ) : (
    <div>
      <p>You do not have permissions to edit or delete this channel</p>
    </div>
  )

  return (
    {ChannelMenu}
  )
};

const mSTP = (state, ownProps) => {
  // debugger
  const currentServerId = ownProps.match.params.serverId;
  const currServer = state.entities.servers[currentServerId];
  const currentChannelId = ownProps.match.params.channelId;
  const currChannel = state.entities.channels[currentChannelId];
  return({
    currentUser: state.entities.currentUser[state.session.session.id],
    currServer: currServer,
    currChannel: currChannel
  })
}

const mDTP = dispatch => {
  return({
    openModal: (modal) => dispatch(openModal(modal)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ChannelContextMenu));