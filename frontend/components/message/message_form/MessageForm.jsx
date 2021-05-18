import React from 'react';

class MessageForm extends React.component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <form>
          <label>
            <input type="text"></input>
          </label>
      
          <input type="submit"></input>
        </form>

      </div>
    )
  }

}