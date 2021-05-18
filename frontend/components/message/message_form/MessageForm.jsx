import React from 'react';

import { convertToSnakeCase } from '../../../util/selectors';

class MessageForm extends React.component {
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
    this.props.subscription.speak(convertToSnakeCase({ 
      message: this.state.body 
    }));
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
          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

export default MessageForm;