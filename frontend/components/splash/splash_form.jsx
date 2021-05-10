import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.action(user);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    const emailInput = (
      <div>
        <label>Email:
          <input 
            type="text" 
            onChange={this.update('email')} 
            value={this.state.email} />
        </label>
        <br />
      </div>
    )
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          { this.props.formType == 'Sign Up' ? emailInput : null}
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
        { this.props.formType == "Login" ? 
          <Link to="/signup">Sign Up</Link> : 
          <Link to="/login">Login</Link> }
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
    )
  }
}

export default SplashForm;