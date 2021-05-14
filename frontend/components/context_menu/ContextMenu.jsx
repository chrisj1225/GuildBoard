import React from 'react';

import styles from './ContextMenu.module.scss';

class ContextMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      xPos: "0px",
      yPos: "0px",
      showMenu: false
    }

    // this.handleRightClick = this.handleRightClick.bind(this);
    // this.handleContextMenu = this.handleContextMenu.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
    document.addEventListener("contextmenu", this.handleContextMenu);
  }

  componentWillUnMount() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("contextmenu", this.handleContextMenu);
  }

  handleClick = (e) => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false
      })
    }
  }

  handleContextMenu = (e) => {
    e.preventDefault();
    this.setState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true
    })
  }

  render() {
    if (this.state.showMenu) {
      return(
        <div 
          className={styles['context-menu']}
          style={{
            top: this.state.yPos,
            left: this.state.xPos,
          }} >
          <p>
            Pass custom text and actions via props here!
          </p>
  
        </div>
      )

    } else {
      return null;
    }
  }



}

export default ContextMenu;