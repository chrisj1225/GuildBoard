import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';
import ExploreServersItem from './ExploreServersItem';

class ExploreServersMenu extends React.Component {
  constructor(props) {
    super(props)

    this.joinServer = this.joinServer.bind(this);
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
              joinServer={this.joinServer}
            />
          })}

        </ul>
      </div>
    )
  }
}

export default ExploreServersMenu;