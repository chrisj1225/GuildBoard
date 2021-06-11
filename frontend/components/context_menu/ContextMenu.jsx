import React from 'react';

// import ChannelContextMenu from '../channel/channel_context_menu/ChannelContextMenu';
import styles from './ContextMenu.module.scss';

class ContextMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      xPos: "0px",
      yPos: "0px",
      showMenu: false,
    }

    // this.handleRightClick = this.handleRightClick.bind(this);
    // this.handleContextMenu = this.handleContextMenu.bind(this);
  }
  
  // componentDidMount() {
  //   // debugger
  //   const parent = this.props.parentRef.current;
  //   if (parent) {
  //     document.addEventListener("click", this.handleClick);
  //     parent.addEventListener("contextmenu", this.handleContextMenu);
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const parent = this.props.parentRef.current;
      if (parent) {
        document.addEventListener("click", this.handleClick);
        parent.addEventListener("contextmenu", this.handleContextMenu);
      }
    }
  }
  
  componentWillUnmount() {
    const parent = this.props.parentRef.current;
    if (parent) {
      document.removeEventListener("click", this.handleClick);
      parent.removeEventListener("contextmenu", this.handleContextMenu);
    } else {
      return;
    }
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
    // const { type, obj } = this.props;
    
    // let component;
    // switch (type) {
      //   case "channel":
      //     component = <ChannelContextMenu channel={obj}/>
      //     break;
      //   default:
      //     break;
      // }

    const { menu } = this.props;
      
    if (this.state.showMenu) {
      return(
        <>
          <div 
            className={styles['context-menu']}
            style={{
              top: this.state.yPos,
              left: this.state.xPos,
            }} >
            {menu}
          </div>
        </>
      )
    } else {
      return null;
    }
  }



}

export default ContextMenu;