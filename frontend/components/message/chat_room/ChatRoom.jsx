import React from 'react';
import MessageFormContainer from '../message_form/MessageForm_container';
import Message from '../message/Message';
import styles from './ChatRoom.module.scss';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { messages: [] };
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
          switch (data.type) {
            case "receive_message":
              // this.setState.call(this, ({
              //   messages: this.state.messages.concat(data.message)
              // }));
              this.props.receiveMessage(data.message);
            break;
            case "receive_messages":
              // this.setState.call(this, ({
              //   messages: data.messages
              // }));
              this.props.receiveChannelMessages(data.messages);
              break;
          }
        },
        speak: data => {
          return this.subscription.perform("speak", data);
        },
        // load: () => {
        //   return this.subscription.perform("load")
        // },
        // unsubscribe: () => {
        //   return this.subscription.perform("unsubscribed")
        // }
      }
    );
  }

  componentDidMount() {

    // this.subscription.load();
  
    this.props.fetchChannelMessages(this.props.chat.id);
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount() {
    // this.subscription.unsubscribe();
    App.cable.subscriptions.remove(this.subscription);
  }

  render() {
    // debugger
    let messageList = [];
    if (this.props.messages.length !== 0) {
      this.props.messages.forEach(message => {
        debugger
        messageList.push(
          <Message 
            key={message.id}
            message={message}
            username={this.props.users[message.authorId].username}
            bottom={this.bottom}
          />
          );
        });
    } else {
      messageList = (
        <div className={styles['welcome-msg']}>
            <h1>Welcome to {this.props.chat.title}!</h1>
          </div>
        ); 
    }

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