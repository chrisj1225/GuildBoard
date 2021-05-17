import React from 'react';
import { Link } from 'react-router-dom';

import styles from './auth.module.scss';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user).then(() => {
      this.props.history.push('/home')
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const demoUser = ({
      username: "demouser",
      password: "password"
    });
    this.props.login(demoUser).then(() => {
      this.props.history.push('/home')
    });
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

    const authBackgroundImg = {backgroundImage: `url(${window.authBackground})`}

    return (
      <div className={styles.container} style={authBackgroundImg}>
        <div className={styles['login-box']}>
          <div className={styles.form}>
            <h2 className={styles.header}>Welcome back!</h2>
            <p className={styles.text}>We're so excited to see you again!</p>
            <form onSubmit={this.handleSubmit}>
              <label>USERNAME:
                <br />
                <input 
                  className={styles['input-field']}
                  type="text" 
                  onChange={this.update('username')} 
                  value={this.state.username} />
              </label>
              <br />
              <label>PASSWORD:
                <br />
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
            <p className={styles.text}>
              Need an account? <Link className={styles.link} to="/signup">Register</Link>
            </p>
            <Link className={styles.link} to="/">Back to Landing Page</Link>
          </div>
          <div className={styles.demo}>
            <p className={styles.text}>Don't have an account?</p>
            <p className={styles.text}>Try logging in as a demo user!</p>
            <button 
              className={styles['demo-login']}
              onClick={this.handleDemoLogin} >
                Demo User Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;