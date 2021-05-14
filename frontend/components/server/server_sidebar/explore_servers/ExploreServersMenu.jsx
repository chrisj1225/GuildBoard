import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';
import ExploreServersItem from './ExploreServersItem';

import styles from './ExploreMenu.module.scss';

class ExploreServersMenu extends React.Component {
  constructor(props) {
    super(props)

    this.joinServer = this.joinServer.bind(this);
    this.leaveServer = this.leaveServer.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchServers();
  }

  joinServer(serverId) {
    // debugger
    return () => {
      // debugger
      let memberParams = {};
      Object.keys(this.props.memberParams).forEach(key => {
        memberParams[key] = this.props.memberParams[key]
      });
      memberParams.joinableId = serverId
      memberParams = convertToSnakeCase(memberParams);
      this.props.addServerMember(memberParams);
      this.props.closeModal();
    }
  }

  leaveServer(serverId) {
    // debugger
    return () => {
      const membershipId = this.props.servers[serverId].membershipId;
      this.props.removeServerMember(membershipId);
      this.props.closeModal();
    }
  }

  // Add event handler for leaveServer(e) for leave button
  // will conditionally render if current user is joined to server already.

  render() {

    if (!Object.keys(this.props.servers).length) {
      // debugger // this does not get triggered. Not a rendering issue.
      return null;
    }
    return(
      <div className={styles['explore-container']}>
        <h1 className={styles.header}>Explore all servers</h1>
        <h2>Check out all of the publicly available servers and try joining one that interests you!</h2>
        <ul>
          {Object.values(this.props.servers).map(server => {
            return <ExploreServersItem 
              key={server.id}
              server={server}
              joinServer={this.joinServer}
              leaveServer={this.leaveServer}
            />
          })}

        </ul>
      </div>
    )
  }
}

export default ExploreServersMenu;