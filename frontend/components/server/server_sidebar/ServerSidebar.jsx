import React from 'react';
import ServerSidebarItem from './ServerSidebarItem';
import CreateServerButton from './create_server/CreateServerButton';
import ExploreServersButton from './explore_servers/ExploreServersButton';
import styles from './ServerSidebar.module.scss';

class ServerSidebar extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // debugger
    this.props.fetchUserServers(this.props.currentUser.id);
  }

  render() {
    return(
      <div className={styles.sidebar}>
        <ul>
          {this.props.servers.map(server => {
            return <ServerSidebarItem 
              key={server.id}
              server={server} />
          })}
          <CreateServerButton openModal={this.props.openModal} />
          <ExploreServersButton openModal={this.props.openModal} />

        </ul>
      </div>


    )
  }
}

export default ServerSidebar;