import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';

import styles from './CreateForm.module.scss';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.newChannel;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let channel_params = convertToSnakeCase(this.state);
    this.props.createChannel(channel_params);
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
        <h1 className={styles.header}>Create Text Channel</h1>
        <form 
          className={styles['create-form']}
          onSubmit={this.handleSubmit}>
          <label>CHANNEL NAME
            <input 
              className={styles.input}
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <p>By making a new channel, you agree to GuildBoard's guidelines.</p>
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={()=>this.props.closeModal()}>Cancel</button>
            <input className={styles.submit} type="submit" value="Create" />
          </div>
        </form>
      </div>

    )

  }

}

export default CreateChannelForm;