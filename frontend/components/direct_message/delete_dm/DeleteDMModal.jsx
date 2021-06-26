import React from 'react';
import { convertToSnakeCase } from '../../../util/selectors';

import styles from './DeleteDM.module.scss';

class DeleteDMModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDM(this.props.dm.id)
      .then(res => {
        this.props.closeModal();
        this.props.history.push('/@me/home');
      })
  }

  render() {
    const { dm } = this.props;

    return(
      <div className={styles['delete-dm-container']}>
        <div className={styles.header}>
          <h1>
            Confirm Delete <br />
            Direct Message with {dm.otherUser.username}
          </h1>
          <p>
            This action cannot be undone. <br />
            Please only confirm deletion if you are sure!
          </p>
        </div>
        <div className={styles['delete-btns']}>
          <div onClick={() => this.props.closeModal()}
            className={styles.cancel}>
            Cancel
          </div>
          <div onClick={(e) => this.handleDelete(e)}
            className={styles.delete}>
            Delete
          </div>
        </div>
      </div>

    )
  }
};

export default DeleteDMModal;