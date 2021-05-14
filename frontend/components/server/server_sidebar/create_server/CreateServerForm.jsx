import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';

import styles from './CreateForm.module.scss';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.newServer;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let server_params = convertToSnakeCase(this.state);
    this.props.createServer(server_params);
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
      <div className={styles['create-form']}>
        <h1>Customize your server</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input 
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <div>
            <button onClick={()=>this.props.closeModal()}>Back</button>
            <input type="submit" value="Create" />
          </div>
        </form>

      </div>

    )

  }

}

export default CreateServerForm;