import React from 'react';

import styles from '../ServerSidebar.module.scss';

const Tooltip = ({ title, el }) => {
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
      top: `${bottom - 13 - height/2}px`
    }
  } else {
    return null;
  }

  return (
    <div className={styles.wrapper} 
    style={style}> 
      <div className={styles.tooltip}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}


export default Tooltip;