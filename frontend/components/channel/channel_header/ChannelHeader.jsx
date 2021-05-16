import React from 'react'; 
import styles from './ChannelHeader.module.scss';

const ChannelHeader = ({ channel }) => (

  <div className={styles['channel-header']}>
    <div>
      <h1>#{channel.title}</h1>
    </div>
    <div className={styles['icon-links']}>
      <a 
        href="https://www.linkedin.com/in/chrisj1225/"
        target="_blank" >
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
      <a 
        href="https://github.com/chrisj1225/GuildBoard"
        target="_blank" >
        <i className="fab fa-github-square fa-lg"></i>
      </a>      
    </div>
  </div>

)

export default ChannelHeader