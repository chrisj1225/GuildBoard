import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Splash.module.scss';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser} = this.props;
    const LogButton = currentUser ? (
      <div>
        <button className={styles['log-button']} onClick={() => this.props.logout()}>Logout</button>
      </div>
    ) : (
      <div className={styles['login-container']}>
        <Link className={styles['log-button']} to="/login">Login</Link>
      </div>
    )

    const SplashButtons = currentUser ? (
      <>
        <Link className={styles['splash-open-gb']}to="/">Enter GuildBoard</Link>
        {/* Change Redirect to "/servers/:general/channels/:general" once those components are made" */}
      </>
    ) : (
      <div className={styles['splash-button-container']}>
        <Link className={styles['splash-login']} to="/login">Login</Link>
        <Link className={styles['splash-signup']}to="/signup">Sign Up</Link>
      </div>
    )

    const splashBackgroundImg = {backgroundImage: `url(${window.splashBackground})`}

    return(
      <div >
        <div 
          className={styles.splash}
          style={splashBackgroundImg} >
          <div className={styles['nav-container']}>
            <Link to="/">
              <img className={styles.logo} src={window.logoUrl} />
            </Link>
            <nav className={styles['nav-bar']}>
              <Link to="/">Download</Link>
              <Link to="/">Why GuildBoard?</Link>
              <Link to="/">Github</Link>
              <Link to="/">LinkedIn</Link>
            </nav>
            {LogButton}
          </div>
          <div className={styles['splash-content']}>
            <h1 className={styles.header}>Your adventure starts here</h1>
            <p className={styles['splash-text']}>Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, GuildBoard makes it easy to talk every day and hang out more often.</p>
            {SplashButtons}
          </div>
        </div>
        <div>


        </div>

      </div>

    )
  }
}

export default Splash