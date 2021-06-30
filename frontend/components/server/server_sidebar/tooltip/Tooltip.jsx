import React from 'react';

import styles from '../ServerSidebar.module.scss';

const Tooltip = ({ title, el }) => {
  // let style = {
  //   height: `${25}px`
  // }
  let style;
  if (el && el.current) {
    const {
      top,
      bottom,
      height,
      right,
      width,
    } = el.current.getBoundingClientRect();
    style = {
      top: `${bottom - 12.5 - (height / 2)}px`
      // top: `${bottom}px`
    }
  } else {
    return null;
  }
  // debugger

  return (
    <div className={styles.wrapper} 
    style={style}> 
      <span className={styles.tooltip}
       
      >
        {title}
      </span>
    </div>
  )
}


export default Tooltip;