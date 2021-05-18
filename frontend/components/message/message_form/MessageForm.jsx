import React from 'react';

class MessageForm extends React.component {
  constructor(props) {
    super(props);

    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({ body: "" });
  }  

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Message channel/DM name"
          />
          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

export default MessageForm;