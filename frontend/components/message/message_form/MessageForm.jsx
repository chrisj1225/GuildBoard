import React from 'react';

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
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Message 'channel/DM name'"
          />
          <button type="submit">enter</button>
        </form>
      </div>
    )
  }

}

export default MessageForm;