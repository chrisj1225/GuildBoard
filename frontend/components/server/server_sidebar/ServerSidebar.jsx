import React from 'react';
import ServerSidebarItem from './ServerSidebarItem';

class ServerSidebar extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchUserServers(this.props.currentUser.id);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.servers.map(server => {
            return <ServerSidebarItem 
              key={server.id}
              server={server} />
          })}
        </ul>
        {/* Include 'Add a Server' and 'Explore Servers' */}
      </div>


    )
  }
}

export default ServerSidebar;