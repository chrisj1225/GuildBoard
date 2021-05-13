import React from 'react';
import ServerSidebarItem from './ServerSidebarItem';
import CreateServerButton from './create_server/CreateServerButton';
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
          <CreateServerButton createServer={this.props.createServer} />
        {/* Include 'Add a Server' and 'Explore Servers' */}

        </ul>
      </div>


    )
  }
}

export default ServerSidebar;