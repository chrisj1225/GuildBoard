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
      <>
        <label>Email:
          <input 
            type="text" 
            onChange={this.update('email')} 
            value={this.state.email} />
        </label>
        <br />
      </>
    )

    const redirect = this.props.formType == "Login" ? (
      <div>
        <span>Need an account? </span>
        <Link to="/signup">Register</Link>
      </div>
    ) : (
      <Link to="/login">Already have an account?</Link>
    );

    const header = this.props.formType == "Login" ? (
      <>
        <h2 className="splashHeader">Welcome Back!</h2>
        <p>We're so excited to see you again!</p>
      </>
    ) : (
      <>
        <h2 className="splashHeader">Create an account</h2>
      </>
    )

    return (
      <div>
        {header}
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
        {redirect}
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
    )
  }
}

export default SplashForm;