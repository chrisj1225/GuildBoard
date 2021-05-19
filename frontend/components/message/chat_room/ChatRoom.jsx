import React from 'react';
import MessageFormContainer from '../message_form/MessageForm_container';
import { convertDateString } from '../../../util/selectors';
import styles from './ChatRoom.module.scss';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
    // this.loadChat = this.loadChat.bind(this);
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
          switch (data.type) {
            case "message":
              this.setState.call(this, ({
                messages: this.state.messages.concat(data.message)
              }));
            break;
            case "messages":
              this.setState.call(this, ({
                messages: data.messages
              }));
              break;
          }
        },
        speak: data => {
          // calling speak in front end invokes speak method in backend
          // via App.cable's this.perform function
          return this.subscription.perform("speak", data);
        },
        load: () => {
          return this.subscription.perform("load")
        },
        unsubscribe: () => {
          return this.subscription.perform("unsubscribed")
        }
      }
    );

    // this.loadChat = this.loadChat.bind(this);
  }

  componentDidMount() {
    debugger
    // this.loadChat();
    this.subscription.load();
    // this.props.fetchChannelMessages(this.props.chat.id);
    // this.setState({
    //   messages: this.props.messages
    // })
  }

  // loadChat() {
  //   return e => {
  //     e.preventDefault();
  //     this.subscription.load();
  //   }
  // }

  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }

  componentWillUnmount() {
    debugger
    this.subscription.unsubscribe();
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