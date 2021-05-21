import React from 'react';

import styles from './EditUserForm.module.scss';

class EditUserForm extends React.Component {
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
    this.props.editUser(user).then(() => {
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

    return (
        <div className={styles['edit-box']}>
          <h2>Edit User</h2>
          <form onSubmit={this.handleSubmit}>
            <label>EMAIL:
              <br />
              <input 
                type="text" 
                onChange={this.update('email')} 
                value={this.state.email} />
            </label>
            <br />
            <label>USERNAME:
              <br />
              <input 
                type="text" 
                onChange={this.update('username')} 
                value={this.state.username} />
            </label>
            {showErrors}
            <br />
            <input className={styles.button} type="submit" value={this.props.formType} />
          </form>
        </div>
    )
  }
}

export default EditUserForm;