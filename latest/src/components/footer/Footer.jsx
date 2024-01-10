import React from 'react'
import Logo from '../../images/logosharewheels.png'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt="" />
            <button>Share A Car</button>
        </div>
    </div>
  )
}

export default Footer