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
    this.props.deleteDM(this.props.dm.id);
    this.props.closeModal();
  }

  render() {
    const { dm } = this.props;

    return(
      <div className={styles['update-container']}>
        <div>
          <h1 className={styles.header}>
            Confirm Delete <br />
            Direct Message with {dm.otherUser.username}
          </h1>
        </div>
        <div>
          <div onClick={(e) => this.handleDelete(e)}>
            Delete
          </div>
          <div onClick={() => this.props.closeModal()}>
            Cancel
          </div>
        </div>
      </div>

    )
  }
};

export default DeleteDMModal;