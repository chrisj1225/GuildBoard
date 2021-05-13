import React from 'react';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.server;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.addServerMember(this.props.createdServer.id, this.props.currentUser.id)

  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createServer(this.state);
    debugger
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
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input 
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
          </label>
          <input type="submit" value="Create" />
        </form>

      </div>

    )

  }

}

export default CreateServerForm;