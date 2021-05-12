import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Splash.module.scss';

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {currentUser} = this.props;
    const userAuth = currentUser ? (
      <div>
        <button className={styles['log-button']} onClick={() => this.props.logout()}>Logout</button>
      </div>
    ) : (
      <div>
        <Link className={styles['log-button']} to="/login">Login</Link>
        {/* <Link to="/signup">Sign Up</Link> */}
      </div>
    )

    const redirectHome = currentUser ? (
      <div>
        <h2 className={styles['splash-text']}>Welcome Back, {currentUser.username}!</h2>
        <Link to="/">Open GuildBoard</Link>
        {/* Change Redirect to "/servers/:general/channels/:general" once those components are made" */}
      </div>
    ) : (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
    </div>
    )

    return(
      <div >
        <div className={styles.splash}>
          <div className={styles['nav-container']}>
            <Link to="/">
              <img className={styles.logo} src={window.logoUrl} />
            </Link>
            <nav className={styles['nav-bar']}></nav>
            {userAuth}
          </div>
          <div className={styles['splash-content']}>
            <h1 className={styles.header}>Your adventure starts here</h1>
            <p className={styles['splash-text']}>Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, GuildBoard makes it easy to talk every day and hang out more often.</p>
            {redirectHome}
          </div>
        </div>
        <div>


        </div>

      </div>

    )
  }
}

export default Splash