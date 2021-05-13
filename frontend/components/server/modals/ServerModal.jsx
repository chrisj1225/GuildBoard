import React from 'react';
import { closeModal } from '../../../actions/ui_actions';
import { connect } from 'react-redux';
import CreateServerFormContainer from '../server_sidebar/create_server/CreateServerForm_container';
import ExploreServersMenuContainer from '../server_sidebar/explore_servers/ExploreServersMenu_Container';

import styles from './ServerModal.module.scss';

const ServerModal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch(modal) {
    case 'create':
      component = <CreateServerFormContainer />
      break;
    case 'explore':
      component = <ExploreServersMenuContainer />
      break;
    default:
      return null;
  }

  return(
    <div 
      className={styles["modal-bg"]}
      onClick={closeModal} >
      <div 
        className={styles['modal-child']} 
        onClick={e => e.stopPropagation()} >
        { component }

      </div>
    </div>

  )
}

const mSTP = state => {
  // debugger
  return({
    modal: state.ui.modal
  })
}

const mDTP = dispatch => {
  return({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mSTP, mDTP)(ServerModal);