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
    this.props.fetchServers();
    this.props.fetchUserServers(this.props.currentUser.id);
  }

  render() {
    // console.log(this.props.allServers);
    // debugger
    return(
      <div className={styles.sidebar}>
        <ul>
          {this.props.userServersIds.map(serverId => {
            return <ServerSidebarItem 
              key={serverId}
              server={this.props.allServers[serverId]} />
            
          })}
          <CreateServerButton openModal={this.props.openModal} />
          <ExploreServersButton openModal={this.props.openModal} />

        </ul>
      </div>


    )
  }
}

export default ServerSidebar;