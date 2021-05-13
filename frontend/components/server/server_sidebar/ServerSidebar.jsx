import React from 'react';
import ServerSidebarItem from './ServerSidebarItem';
import CreateServerButton from './create_server/CreateServerButton';
import styles from './ServerSidebar.module.scss';

class ServerSidebar extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    debugger
    this.props.fetchUserServers(this.props.currentUser.id);
    debugger
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
          <CreateServerButton createServer={this.props.createServer} />

        </ul>
        {/* Include 'Add a Server' and 'Explore Servers' */}
      </div>


    )
  }
}

export default ServerSidebar;