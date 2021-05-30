import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';

import styles from './UpdateServer.module.scss';

class UpdateServerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.newServer;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let server_params = convertToSnakeCase(this.state);
    if (this.state.id == 1) {
      alert('You cannot edit the General Server')
    } else {
      this.props.updateServer(server_params);
    }
    this.props.closeModal();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    return(
      <div className={styles['update-container']}>
        <h1 className={styles.header}>Change Server Info</h1>
        <form 
          onSubmit={this.handleSubmit}>
          <label>SERVER TITLE
            <input 
              className={styles.input}
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={()=>this.props.closeModal()}>Cancel</button>
            <input className={styles.submit} type="submit" value="Create" />
          </div>
        </form>
      </div>

    )

  }

}

export default UpdateServerForm;