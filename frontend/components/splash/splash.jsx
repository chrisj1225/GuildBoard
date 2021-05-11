import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {currentUser} = this.props;
    const userAuth = currentUser ? (
      <>
        <button onClick={() => this.props.logout()}>Logout</button>
      </>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </>
    )

    const redirectHome = currentUser ? (
      <div>
        <h2>Welcome Back, {currentUser.username}!</h2>
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
      <div>
        <header>
          <span>GuildBoard</span>
          <nav></nav>
          {userAuth}
        </header>
        <h1 className="splashHeader">Your place to talk</h1>
        <p>Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, GuildBoard makes it easy to talk every day and hang out more often.</p>
        {redirectHome}

      </div>

    )
  }
}

export default Splash