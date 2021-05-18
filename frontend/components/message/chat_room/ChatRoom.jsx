import React from 'react';
import MessageForm from '../message_form/MessageForm';
import styles from './ChatRoom.module.scss';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: [] };
    this.bottom = React.createRef();

    this.loadChat = this.loadChat.bind(this);
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          // received listens to channel's stream for new data
          // data trasmitted to stream via backend broadcast_to method. 
          this.setState({
            messages:this.state.messages.concat(data.message)
          });
        },
        speak: function(data) {
          // calling speak in front end invokes speak method in backend
          // via App.cable's this.perform function
          return this.perform("speak", data);
        },
        load: function(messageableId) {
          return this.perform("load")
        }
      }
    );

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
    this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map(message => {
      return(
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className={styles['chatroom-container']}>
        <div>ChatRoom</div>
        <div className={styles.messages}>
          {messageList}
        </div>
        <MessageForm />
      </div>

    )
  } 
 
}

export default ChatRoom;