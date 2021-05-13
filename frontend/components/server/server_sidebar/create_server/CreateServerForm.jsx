import React from 'react';
import { convertToSnakeCase } from '../../../../util/selectors';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.newServer;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let server_params = convertToSnakeCase(this.state);
    this.props.createServer(server_params);
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