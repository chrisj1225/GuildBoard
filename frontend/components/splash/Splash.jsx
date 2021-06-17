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
        <div className={styles['landing-content']}>
          CONTENT HERE
          <section>
            Content 1
          </section>
          <section>
            Content 2
          </section>
          <section>
            Content 3
          </section>
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
                  <i className="far fa-user fa-lg"></i>
                </a>   
              </ul>
            </div> 
            <div className={styles['footer-column']}>
              <h3>Technologies Used</h3>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Ruby on Rails</li>
              <li>Websockets (Action Cable)</li>
              <li>HTML5</li>
              <li>SCSS Modules</li>
              <li>PostgreSQL</li>
            </div>
            <div className={styles['footer-column']}>
              <h3>Things I Like</h3>
              <li>Eating</li>
              <li>Grilling</li>
              <li>Gaming</li>
              <li>Music</li>
              <li>Sneakers</li>
              <li>Star Wars</li>
              <li>One Piece</li>
              <li>MCU</li>
              <li>NBA</li>
              <li>UFC</li>
            </div>
            <div className={styles['footer-column']}>
              <h3>Additional Projects</h3>
              <li><a href="https://postcard-triplog.herokuapp.com/#/" target="_blank">Postcard</a></li>
              <li><a href="https://chrisj1225.github.io/JumpQuest/" target="_blank">Jump Quest</a></li>
              <li><a href="https://redditamaviewer.netlify.app/" target="_blank">Reddit AMA Viewer</a></li>
            </div>
            <div className={styles['footer-column']}>
              <h3>Contact</h3>
              <li>Chris Joo</li>
              <li>chrisj1225@gmail.com</li>
              <li>516-884-2806</li>
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