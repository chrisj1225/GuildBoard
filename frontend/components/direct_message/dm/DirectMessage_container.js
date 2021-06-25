import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchDM } from '../../../actions/dm_actions';
import DirectMessage from './DirectMessage';

const mSTP = (state, ownProps) => {
  const currentDMId = ownProps.match.params.dmId
  return({
    currentDMId,
    currentDM: state.entities.dms[currentDMId]
  })
}

const mDTP = dispatch => {
  return({
    fetchDM: (dmId) => dispatch(fetchDM(dmId))
  })
}

export default withRouter(connect(mSTP, mDTP)(DirectMessage));