import React from 'react';
import HomeButton from './HomeButton.jsx/HomeButton';
import ServerSidebarItem from './ServerSidebarItem';
import CreateServerButton from './create_server/CreateServerButton';
import ExploreServersButton from './explore_servers/ExploreServersButton';
import styles from './ServerSidebar.module.scss';

class ServerSidebar extends React.Component {
  constructor(props) {
    super(props)

  }
  
  // componentDidUpdate() {
  //   // debugger
  //   if (!this.props.home) {
  //     this.props.fetchServerMembers(this.props.currServerId);
  //   } 
  //   // this.props.fetchAllServers(this.props.currentUser.id);
  // }
  componentDidMount() {
    // debugger
    if (!this.props.home) {
      this.props.fetchServerMembers(this.props.currServerId);
    } 
    this.props.fetchAllServers(this.props.currentUser.id);
  }

  render() {
    // debugger
    if ((!Object.keys(this.props.allServers).length) || 
    (!this.props.userServersIds.length)) {
      return null;
    }
    return(
      <div className={styles.sidebar}>
        <HomeButton />
        <hr />
        {this.props.userServersIds.map(serverId => {
          return <ServerSidebarItem 
            key={serverId}
            server={this.props.allServers[serverId]}
            channels={this.props.channels} />
        })}
        <CreateServerButton openModal={this.props.openModal} />
        <ExploreServersButton openModal={this.props.openModal} />

      </div>
    )
  }
}

export default ServerSidebar;