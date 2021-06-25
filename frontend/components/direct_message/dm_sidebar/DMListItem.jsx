import React from 'react';
import { NavLink } from 'react-router-dom';
import ContextMenu from '../../context_menu/ContextMenu';

import styles from './DMSidebarList.module.scss';

const DMListItem = ({ currentUser, dm, openModal, history }) => {

  // const destroyDM = (dmId) => {
  //     deleteDM(dmId)
  //       .then(history.push(`/@me/home`));
  //   }
  // }

  const DeleteDMBtn = (
    <div className={styles['delete-btn']}
      onClick={() => openModal({type: "delete-dm", dm})}>
      <i className="fas fa-times"></i>
    </div>
  )

  return(
    <div className={styles['dm-item']}>
      <NavLink
        className={styles['dm-link']}
        activeClassName={styles['selected']}
        to={`/@me/${dm.id}`} >
        {dm.otherUser.username}
        {DeleteDMBtn}
      </NavLink>
    </div>
  )
};

export default DMListItem;