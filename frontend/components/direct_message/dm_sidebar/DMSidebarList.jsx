import React from 'react';
import { NavLink } from 'react-router-dom';
import DMListItem from './DMListItem';
import UserBar from '../../server/server_channel_list/bottom_user_bar/UserBar';

import styles from './DMSidebarList.module.scss';


class DMSidebarList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serverMenuShow: false
    }
  }

  render() {
    // if (!this.props.channels || !this.props.channels.length) return null;

    const { currentUser, dms, dmId, history } = this.props;

    return (
      <div className={styles['dm-list-container']}>
        <div className={styles['home-header']}>
          <h1>Direct Messages</h1>
        </div>
        <div className={styles['dm-list']}>
          <div className={styles['dm-item']}>
            <NavLink
              className={styles['dm-link']}
              activeClassName={styles['selected']}
              to={"/@me/home"} >
              Home
            </NavLink>
          </div>
          <div className={styles['dm-header']}>
            <h2>DIRECT MESSAGES</h2>
          </div>
          <div>
            {Object.values(dms).map(dm => {
              return <DMListItem 
              key={dm.id}
              currentUser={currentUser}
              currentDMId={dmId}
              dm={dm}
              openModal={this.props.openModal}
              history={history}
              />
            })}
          </div>
        </div>
        <UserBar user={currentUser} />
      </div>

    )
  }

}

export default DMSidebarList;