import React from 'react';
import DMListItem from './DMListItem';
import UserBar from '../../server/server_channel_list/bottom_user_bar/UserBar';

import styles from './DMSidebarList.module.scss';


class DMSidebarList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serverMenuShow: false
    }

    this.deleteServer = this.deleteServer.bind(this);
  }

  deleteServer() {
    // debugger
    if (this.props.currServer.id !== 1) {
      this.props.deleteServer(this.props.serverId)
        .then(() => this.props.history.push("/@me/home"));
    }
  }

  render() {
    // if (!this.props.channels || !this.props.channels.length) return null;

    const { currentUser, dmId, history } = this.props;

    return (
      <div className={styles['dm-list-container']}>
        <div className={styles['home-header']}>
          <h1>Direct Messages</h1>
        </div>
        <div className={styles['dm-list']}>
          <div className={styles['dm-header']}>
            <h2>DIRECT MESSAGES</h2>
          </div>
          {/* <div>
            {this.props.directMessages.map(dm => {
              return <DMListItem 
              key={channel.id}
              currentUser={currentUser}
              currentDMId={dmId}
              dm={dm}
              openModal={this.props.openModal}
              history={history}
              />
            })}
          </div> */}
        </div>
        <UserBar user={currentUser} />
      </div>

    )
  }

}

export default DMSidebarList;