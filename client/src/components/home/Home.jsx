import React from "react"
import styles from "./home.module.css"
import UserHeader from "./userHome/header/Header.jsx"
import UserSidebar from "./userHome/sidebar/Sidebar.jsx"
import UserBody from "./userHome/body/Body.jsx"

const Home=()=>{
  return(
    <div className={styles.homePage}>
      <div className={styles.headerContainer}>
        <UserHeader/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <UserSidebar/>
        </div>

        <div className={styles.bodyContainer}>
          <UserBody/>
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>
  )
}

export default Home