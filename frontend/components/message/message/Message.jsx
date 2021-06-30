import React from 'react';
import { convertDateString } from '../../../util/selectors';

import styles from '../chat_room/ChatRoom.module.scss';

const Message = ({ message, username, bottom, currentUser, subscription }) => {

  const messageTooltip = ((currentUser.id == message.authorId) || (currentUser.id == 1)) ? (
    <div className={styles.tooltip}>
      <div className={styles['edit-btn']}
        title="update message feature in progress!">
        <i className="fas fa-edit"></i>
      </div>
      <div className={styles['delete-btn']} 
        onClick={() => subscription.speak({message: {delete: true, messageId: message.id}})}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  ) : null;

  return (
    <li className={styles.message} >
      <span className={styles['msg-username']}>
        {username}
      </span>
      <span className={styles['msg-date']}>
        {convertDateString(message.createdAt)}
      </span>
      <br />
      <span className={styles['msg-content']}>{message.body}</span>
      <div ref={bottom} />
      
      {messageTooltip}
    </li>
  );
}

export default Message;