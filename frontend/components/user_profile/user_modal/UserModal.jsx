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
          debugger
          this.props.closeModal();
          this.props.history.push(`/@me/${res.data.dm.id}`)
        });
    }
  }

  render() {
    const { otherUser } = this.props;
    return(
      <div>
        {otherUser.username}

        <div onClick={this.handleCreateDM(otherUser.id)}>
          Send Message
        </div>
      </div>
    )
  }
}

export default UserModal;