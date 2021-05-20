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
    const server_params = convertToSnakeCase(this.state);
    this.props.createServer(server_params)
      .then((res) => {
        this.props.history.push(`/servers/${res.serverInfo.server.id}/channels/${res.serverInfo.server.genChanId}`)
      });
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
      <div className={styles['create-container']}>
        <h1 className={styles.header}>Customize your server</h1>
        <h2>Give your new server a personality with a name and an icon. You can always change it later.</h2>
        <div className={styles['image-upload']}>
        </div>
        <form 
          className={styles['create-form']}
          onSubmit={this.handleSubmit}>
          <label>SERVER NAME
            <input 
              className={styles.input}
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <p>By creating a server, you agree to GuildBoard's guidelines.</p>
          <div className={styles.buttons}>
            <button className={styles.back} onClick={()=>this.props.closeModal()}>Back</button>
            <button className={styles.submit} type="submit" >Create</button>
          </div>
        </form>

      </div>

    )

  }

}

export default CreateServerForm;