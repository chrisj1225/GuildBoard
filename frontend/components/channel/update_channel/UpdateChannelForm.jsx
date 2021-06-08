import React from 'react';
import { convertToSnakeCase } from '../../../util/selectors';

import styles from './UpdateChannel.module.scss';

class UpdateChannelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.newChannel;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let channel_params = convertToSnakeCase(this.state);
    if (this.state.id == this.props.currServer.genChanId) {
      alert('You cannot edit the general channel')
    } else {
      this.props.updateChannel(channel_params);
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
        <h1 className={styles.header}>Edit Text Channel</h1>
        <form 
          className={styles['update-form']}
          onSubmit={this.handleSubmit}>
          <label>CHANNEL NAME
            <input 
              className={styles.input}
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <p>By updating a channel, you agree to GuildBoard's guidelines.</p>
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={()=>this.props.closeModal()}>Cancel</button>
            <input className={styles.submit} type="submit" value="Edit" />
          </div>
        </form>
      </div>

    )
  }
};

export default UpdateChannelForm;