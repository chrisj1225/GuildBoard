import React from 'react';
import ServerMemberItem from './ServerMemberItem';

import styles from './ServerMemberList.module.scss';

class ServerMemberList extends React.Component {
  constructor(props) {
    super(props)
  }

  // Not needed. This is called in ServerSidebar cDM.
  // componentDidMount() {
  //   this.props.fetchServerMembers(this.props.currentServerId);
  // }

  render(){
    // debugger
    if (!this.props.users) return null;

    const { users, currentServer } = this.props;

    return (
      <div className={styles['member-list']}>
        <h1 className={styles['member-header']}>
          SERVER MEMBERS - {this.props.users.length}
        </h1>
        {users.map(user => {
          return <ServerMemberItem 
            key={user.id}
            user={user}
            serverOwnerId={currentServer.ownerId}
            />
        })}
      </div>

    )
  }

}

export default ServerMemberList;