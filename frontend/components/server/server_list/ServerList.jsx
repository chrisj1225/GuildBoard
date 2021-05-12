import React from 'react';
import ServerListItem from './ServerListItem';

class ServerList extends React.Component {
  constructor(props) {
    super(props)
    // this.state = this.props.servers
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.servers.map(server => {
            return <ServerListItem 
              key={server.id}
              server={server} />
          })}
        </ul>
      </div>

    )
  }

}

export default ServerList;