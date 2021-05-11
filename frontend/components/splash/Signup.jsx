import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {

    return (
      <div>
        <h2 className="splashHeader">Create an account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input 
              type="text" 
              onChange={this.update('email')} 
              value={this.state.email} />
            </label>
          <br />
          <label>Username:
            <input 
              type="text" 
              onChange={this.update('username')} 
              value={this.state.username} />
          </label>
          <br />
          <label>Password:
            <input 
              type="password" 
              onChange={this.update('password')} 
              value={this.state.password} />
          </label>
          <br />
          <input type="submit" value={this.props.formType} />
        </form>
        <div>
          <Link to="/login">Already have an account?</Link>
        </div>
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
    )
  }
}

export default Signup;