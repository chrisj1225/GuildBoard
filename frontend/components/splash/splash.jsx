import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {currentUser} = this.props;
    const header = currentUser ? (
      <div>
        <button onClick={() => this.props.logout()}>Logout</button>
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
          {header}
        </header>
        <h1>Welcome to Guild Board</h1>
      </div>

    )
  }
}

export default Splash