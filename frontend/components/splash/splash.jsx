import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <h1>Welcome to Guild Board</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <button onClick={() => this.props.logout()}>Logout</button>
      </div>

    )
  }

}

export default Splash