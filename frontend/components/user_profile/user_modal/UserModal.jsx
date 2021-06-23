import React from 'react';

class UserModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleCreateDM = this.handleCreateDM.bind(this);
  }

  handleCreateDM(otherUserId) {
    return e => {
      e.preventDefault();
      this.props.createDM(otherUserId)
        .then(res => {
          this.props.history.push(`/@me/${res.dm.id}`)
        });
    }
  }

  render() {
    return(
      <div>
        User

        <div onClick={this.handleCreateDM}>
          Start DM
        </div>
      </div>
    )
  }
}

export default UserModal;