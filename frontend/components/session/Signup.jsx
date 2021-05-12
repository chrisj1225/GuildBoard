import React from 'react';
import { Link } from 'react-router-dom';

import styles from './auth.module.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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
    const showErrors = (
      <>
        {this.props.errors.session.map((err, idx) => (
          <p key={idx} className={styles.error}>{err}</p>
        ))}
      </>
    )

    return (
      <div className={styles.container}>
        <div className={styles['signup-box']}>
          <div className={styles.form}>
            <h2 className={styles.header}>Create an account</h2>
            <form onSubmit={this.handleSubmit}>
              <label>Email:
                <input 
                  className={styles['input-field']}
                  type="text" 
                  onChange={this.update('email')} 
                  value={this.state.email} />
                </label>
              <br />
              <label>Username:
                <input 
                  className={styles[input-field]}
                  type="text" 
                  onChange={this.update('username')} 
                  value={this.state.username} />
              </label>
              <br />
              <label>Password:
                <input 
                  className={styles['input-field']}
                  type="password" 
                  onChange={this.update('password')} 
                  value={this.state.password} />
              </label>
              {showErrors}
              <br />
              <input className={styles.button} type="submit" value={this.props.formType} />
            </form>
            <div>
              <Link className={styles.link} to="/login">Already have an account?</Link>
            </div>
            <br />
            <Link className={styles.link} to="/">Back to Landing Page</Link>

          </div>
        </div>

      </div>
    )
  }
}

export default Signup;