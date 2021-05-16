import React from 'react';
import ServerMemberItem from './ServerMemberItem';

class ServerMemberList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServerMembers(this.props.currentServerId);
  }

  render(){
    // debugger
    return(
      <div>
        <ul>
          {this.props.users.map(user => {
            return <ServerMemberItem 
              key={user.id}
              user={user} />
          })}
        </ul>
      </div>

    )
  }

}

export default ServerMemberList;