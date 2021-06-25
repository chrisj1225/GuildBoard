import React from 'react';
import { Link } from 'react-router-dom';

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
        this.props.closeModal();
        this.props.history.push(`/@me/${res.data.dm.id}`)
      });
    }
  }
  
  handleOpenDM(dmId) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/@me/${dmId}`)
      this.props.closeModal();
    }
  }
  
  render() {
    const { otherUser, dms } = this.props;
    
    let dmId;
    const dmExist = Object.values(dms).some(dm => {
      dmId = dm.id;
      return dm.otherUser.id == otherUser.id
    });
    const dmBtn = dmExist ? (
      <div>
        {/* <Link to={`/@me/${dmId}`} >
          Open Direct Message
        </Link> */}
        <div onClick={this.handleOpenDM(dmId)}>
          Open Direct Message
        </div>
      </div>
    ) : (
      <div onClick={this.handleCreateDM(otherUser.id)}>
        Send Direct Message
      </div>
    );

    return(
      <div>
        <span>
          {otherUser.username}
        </span>
        {dmBtn}
      </div>
    )
  }
}

export default UserModal;