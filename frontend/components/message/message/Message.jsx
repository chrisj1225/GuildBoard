import React from 'react';
import { convertDateString } from '../../../util/selectors';

import styles from '../chat_room/ChatRoom.module.scss';

const Message = ({ message, username, bottom }) => (
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
  </li>
);

export default Message;