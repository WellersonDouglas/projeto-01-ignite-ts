import styles from './Header.module.css'

import LogoIgnite from '../assets/Ignite-logo.svg'

export function Header(){
  return(
    <header className={styles.header}>
      <img src={LogoIgnite} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}