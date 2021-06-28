import React from 'react';
import HomeButton from './HomeButton.jsx/HomeButton';
import ServerSidebarItem from './ServerSidebarItem';
import CreateServerButton from './create_server/CreateServerButton';
import ExploreServersButton from './explore_servers/ExploreServersButton';
import styles from './ServerSidebar.module.scss';

class ServerSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dmsFetched: false
    }

  }
  
  componentDidMount() {
    // debugger
    // if (!this.props.home) {
    //   this.props.fetchServerMembers(this.props.currServerId);
    // } 
    this.props.fetchAllServers(this.props.currentUser.id);
    this.props.fetchAllChannels();
    this.props.fetchUserDMs(this.props.currentUser.id)
      .then(res => {
        this.setState({dmsFetched: true})
      })
  }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.userServersIds !== this.props.userServersIds) {
  //     this.props.fetchAllServers(this.props.currentUser.id);
  //   }
  // }

  componentWillUnmount() {
    this.setState({
      dmsFetched: false
    })
  }

  render() {
    // debugger
    const { allServers, currServerId, path } = this.props;

    if ((!Object.keys(this.props.allServers).length) || 
    (!this.props.userServersIds.length) || 
    (!this.state.dmsFetched)) {
      return null;
    }

    return(
      <div className={styles.sidebar}>
        <HomeButton path={path}/>
        <hr />
        {this.props.userServersIds.map(serverId => {
          return <ServerSidebarItem 
            key={serverId}
            server={allServers[serverId]}
            currServerId={currServerId} />
        })}
        <CreateServerButton openModal={this.props.openModal} />
        <ExploreServersButton openModal={this.props.openModal} />

      </div>
    )
  }
}

export default ServerSidebar;