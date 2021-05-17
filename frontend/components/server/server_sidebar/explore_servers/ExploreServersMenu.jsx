import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';
import ExploreServersItem from './ExploreServersItem';
// import { findGenChanId } from '../../../../util/selectors';

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
    // Fix join server redirect. 
    // Currently has no access to props or all channels.
    return () => {
      // debugger
      let memberParams = {};
      Object.keys(this.props.memberParams).forEach(key => {
        memberParams[key] = this.props.memberParams[key]
      });
      memberParams.joinableId = serverId
      memberParams = convertToSnakeCase(memberParams);
      this.props.addServerMember(memberParams)
        // .then((action) => {
        // const genChanId = findGenChanId(action.server, this.props.channels);
        // this.props.history.push(`/servers/${action.server.id}/channels/${genChanId}`)
      // });
      this.props.closeModal();
    }
  }

  leaveServer(serverId) {
    // Fix leaveServer
    // has no access to this.props within return.
    const history = this.props.history;
    return () => {
      const membershipId = this.props.servers[serverId].membershipId;
      this.props.removeServerMember(membershipId)
        // .then(() => {
        //   history.push('/home');
        // });
      this.props.closeModal();
    }
  }

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