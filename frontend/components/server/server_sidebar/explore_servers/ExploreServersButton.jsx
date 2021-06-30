import React, { useState, useRef } from 'react';
import Tooltip from '../tooltip/Tooltip';

import styles from '../ServerSidebar.module.scss';

const ExploreServersButton = ({ openModal }) => {
  const [tooltip, setTooltip] = useState(false);
  const showTooltip = () => setTooltip(true);
  const hideTooltip = () => setTooltip(false);

  const el = useRef(null);

  return ( 
    <div className={styles['server-icon-wrapper']}
      onClick={() => openModal({type: "explore"})}>
      <div className={styles['create-explore-btn']}
        onMouseOver={showTooltip}
        onFocus={showTooltip}
        onMouseOut={hideTooltip}
        onBlur={hideTooltip}
        ref={el}>
        <i className="fas fa-compass"></i>
      </div>
      {tooltip && <Tooltip title="Explore Servers" el={el}/>}
    </div>
  )
}

export default ExploreServersButton;