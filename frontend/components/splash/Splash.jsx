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
        <Link className={styles['splash-open-gb']}to="/home">Enter GuildBoard</Link>
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
            <a href="https://guildboard.herokuapp.com/#/">
              <img className={styles.logo} src={window.logoUrl} />
            </a>
            <nav className={styles['nav-bar']}>
              <a href="https://github.com/chrisj1225/" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/chrisj1225/" target="_blank">LinkedIn</a>
              <a href="https://chrisj1225.github.io/portfolio/" target="_blank">Portfolio</a>
              <a href="https://angel.co/u/chris-joo" target="_blank">AngelList</a>
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
          CONTENT HERE
        </div>
        <footer>
          <div className={styles['footer-content']}>
            <div className={styles['footer-social']}>
              <h1>Imagine a place...</h1>
              <ul>
                <a 
                  href="https://www.linkedin.com/in/chrisj1225/"
                  target="_blank" >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a 
                  href="https://github.com/chrisj1225/GuildBoard"
                  target="_blank" >
                  <i className="fab fa-github-square fa-lg"></i>
                </a>      
                <a 
                  href="https://angel.co/u/chris-joo"
                  target="_blank" >
                  <i className="fab fa-angellist fa-lg"></i>
                </a>   
                <a 
                  href="https://chrisj1225.github.io/portfolio/"
                  target="_blank" >
                  <i class="far fa-user fa-lg"></i>
                </a>   
              </ul>
            </div> 

          </div>
          <hr />
          <div className={styles['footer-logo']}>
            <a href="https://guildboard.herokuapp.com/#/">
              <img className={styles.logo} src={window.logoUrl} />
            </a>
            <Link className={styles['footer-signup']}to="/signup">Sign Up</Link>
          </div>
        </footer>

      </div>

    )
  }
}

export default Splash