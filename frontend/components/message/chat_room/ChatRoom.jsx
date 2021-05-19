import React from 'react';
import MessageFormContainer from '../message_form/MessageForm_container';
import { convertDateString } from '../../../util/selectors';
import styles from './ChatRoom.module.scss';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { messages: [] };
    this.bottom = React.createRef();
    this.subscription = App.cable.subscriptions.create(
      // first argument gets passed to backend chat_channel.rb as params
      { 
        channel: "ChatChannel",
        type: this.props.chatType,
        chatId: this.props.chat.id
      },
      {
        received: data => {
          // received listens to channel's stream for new data
          // data trasmitted to stream via backend broadcast_to method. 
          this.setState.call(this, ({
            messages: this.state.messages.concat(data.message)
          }));
        },
        speak: data => {
          // calling speak in front end invokes speak method in backend
          // via App.cable's this.perform function
          return this.subscription.perform("speak", data);
        },
        // load: function(messageableId) {
        //   return this.perform("load")
        // }
      }
    );

    this.loadChat = this.loadChat.bind(this);
  }

  componentDidMount() {
    // debugger
    // call this.loadChat here?
  }

  loadChat(messageableId) {
    return e => {
      e.preventDefault();
      // pass in messageableId to load here via this.props?
      App.cable.subscriptions.subscriptions[0].load(messageableId);
    }
  }

  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map(message => {
      // debugger
      return(
        <li 
          key={message.id}
          className={styles.message} >
          <span className={styles['msg-username']}>
            {this.props.users[message.authorId].username}
          </span>
          <span className={styles['msg-date']}>
            {convertDateString(message.createdAt)}
          </span>
          <br />
          <span className={styles['msg-content']}>{message.body}</span>
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className={styles['chatroom-container']}>
        <div className={styles['message-list']} >
          {messageList}
        </div>
        <MessageFormContainer 
          subscription={this.subscription} />
      </div>

    )
  } 
}

export default ChatRoom;