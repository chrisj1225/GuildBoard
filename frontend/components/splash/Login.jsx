import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Splash.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user);
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
        <h2 className={classes.header}>Welcome Back!</h2>
        <p>We're so excited to see you again!</p>
        <form onSubmit={this.handleSubmit}>
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
          <span>Need an account? </span>
          <Link to="/signup">Register</Link>
        </div>
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
    )
  }
}

export default Login;