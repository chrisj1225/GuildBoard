import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserProfile.module.scss';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  handleBack = () => {
    this.props.history.goBack();
    // this.props.history.push('/home')
  }

  render() {
    return (

      <div className={styles['profile-container']}>
        <div className={styles['back_x']}
          onClick={this.handleBack}>
          <i className={styles['back_x']} 
            className="far fa-times-circle fa-3x"
            onClick={this.handleBack} ></i>
        </div>

        <h1>My Account</h1>
        <div className={styles['profile-box']}>
          <img className={styles.logo} src={window.gbLogoUrl} />
          <div>
            <span className={styles['info-header']}>EMAIL</span>
            <h2>{this.props.currentUser.email}</h2>
            <span className={styles['info-header']}>USERNAME</span>
            <h2 >{this.props.currentUser.username}</h2>
          </div>
          <button 
            className={styles.edit}
            onClick={() => this.props.openModal('edit-user')} >Edit User</button>
        </div>
        <div>
          <button 
            className={styles['logout']} 
            onClick={() => this.props.logout()}>Logout</button>
        </div>
      </div>
    )
  }
}


export default UserProfile