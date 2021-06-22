import React from 'react'; 
import styles from './DMHeader.module.scss';

const DMHeader = ({ directMessage }) => (

  <div className={styles['dm-header']}>
    <div>
      <h1><i className="fas fa-hashtag"></i> Other User's Username</h1>
    </div>
    <div className={styles['icon-links']}>
      <a 
        href="https://github.com/chrisj1225/GuildBoard"
        target="_blank" >
        <i className="fab fa-github-square fa-lg"></i>
      </a>      
      <a 
        href="https://www.linkedin.com/in/chrisj1225/"
        target="_blank" >
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
      <a 
        href="https://angel.co/u/chris-joo"
        target="_blank" >
        <i className="fab fa-angellist fa-lg"></i>
      </a>      
      <a 
        href="https://chrisj1225.github.io/portfolio/"
        target="_blank" >
        <i className="far fa-user fa-lg"></i>
      </a> 
    </div>
  </div>

)

export default DMHeader