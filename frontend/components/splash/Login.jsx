import React from 'react';
import { Link } from 'react-router-dom';

import classes from './auth.module.scss';

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
    const showErrors = (
      <>
        {this.props.errors.map((err, idx) => (
          <p key={idx} className={classes.error}>{err}</p>
        ))}
      </>
    )
    return (
      <div className={classes.container}>
        <div className={classes.loginbox}>
          <div className={classes.form}>
            <h2 className={classes.header}>Welcome back!</h2>
            <p className={classes.text}>We're so excited to see you again!</p>
            <form onSubmit={this.handleSubmit}>
              <label>USERNAME:
                <br />
                <input 
                  className={classes.input_field}
                  type="text" 
                  onChange={this.update('username')} 
                  value={this.state.username} />
              </label>
              <br />
              <label>PASSWORD:
                <br />
                <input 
                  className={classes.input_field}
                  type="password" 
                  onChange={this.update('password')} 
                  value={this.state.password} />
              </label>
              {showErrors}
              <br />
              <input className={classes.button} type="submit" value={this.props.formType} />
            </form>
            <p className={classes.text}>
              Need an account? <Link className={classes.link} to="/signup">Register</Link>
            </p>
            <Link className={classes.link} to="/">Back to Landing Page</Link>
          </div>
          <div className={classes.demo}>
            <p className={classes.text}>Don't have an account?</p>
            <p className={classes.text}>Try logging in as a demo user!</p>
            <button className={classes.demo_login}>Demo User Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;