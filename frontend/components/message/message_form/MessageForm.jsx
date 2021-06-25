import React from 'react';

import styles from './MessageForm.module.scss'

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.message; // {body: "", authorId: 1 }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.subscription.speak({ 
      message: this.state
    });
    this.setState({
       body: "" 
    });
  }  

  render() {
    const placeholderText = (this.props.chatType == "Channel") ? (
      `Message ${this.props.chat.title}`
    ) : (
      `Message ${this.props.chat.otherUser.username}`
    )

    return(
      <div className={styles['message-wrapper']}>
        <form 
          className={styles['message-form']}
          onSubmit={this.handleSubmit}>
          <input 
            className={styles['message-input']}
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder={placeholderText}
          />
          <button type="submit"></button>
        </form>
      </div>
    )
  }

}

export default MessageForm;