import { connect } from 'react-redux';
import { fetchServers } from '../../../actions/server_actions';
import ServerList from './ServerList';

const mSTP = (state) => {
  return({
    servers: Object.values(state.entities.servers)
  })
}

const mDTP = dispatch => {
  return ({
    fetchServers: () => dispatch(fetchServers())
    // Add join server button (create membership between currentUser and server) 
    // Pass as prop to ServerListItem 
  })
}

export default connect(mSTP, mDTP)(ServerList)