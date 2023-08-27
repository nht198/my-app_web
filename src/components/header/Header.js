import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.scss"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>
      </h2>
    </Link>
  </div>
)

const activeLink = ({isActive}) => (isActive?`${styles.active}`:"");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMeu = () => setShowMenu(!showMenu);
  const hideMenu = () => setShowMenu(false)

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu?`${styles["show-nav"]}`:`${styles["hide-nav"]}`}>
          <div className={showMenu
            ?`${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
            :`${styles["nav-wrapper"]}`}
            onClick={hideMenu}>    
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header