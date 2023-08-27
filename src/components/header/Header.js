import React, {useState} from 'react'
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"
import {HiOutlineMenuAlt3} from "react-icons/hi"

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
  const toggleMenu = () => setShowMenu(!showMenu);
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
          <ul onClick={hideMenu}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header