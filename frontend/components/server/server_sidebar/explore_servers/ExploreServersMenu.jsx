import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';
import ExploreServersItem from './ExploreServersItem';

class ExploreServersMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.memberParams;

    this.joinServer = this.joinServer.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchServers();
  }

  joinServer(serverId) {
    this.setState({
      joinableId: serverId
    })
    let member_params = convertToSnakeCase(this.state);
    this.props.addServerMember(member_params);
    this.props.closeModal();
  }

  // Add event handler for leaveServer(e) for leave button
  // will conditionally render if current user is joined to server already.

  render() {
    return(
      <div>
        <ul>
          {this.props.servers.map(server => {
            return <ExploreServersItem 
              key={server.id}
              server={server}
              joinServer={() => this.joinServer}
            />
          })}

        </ul>
      </div>
    )
  }
}

export default ExploreServersMenu;