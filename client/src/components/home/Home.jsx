import React,{useEffect} from "react"
import styles from "./home.module.css"
import UserHeader from "./userHome/header/UserHeader.jsx"
import UserSidebar from "./userHome/sidebar/UserSidebar.jsx"
import RequestDriver from "./userHome/body/requestDriver/RequestDriver.jsx"

import DriverHeader from "./driverHome/header/DriverHeader.jsx"
import DriverSidebar from "./driverHome/sidebar/DriverSidebar.jsx"
import axios from "axios"
import { useState } from "react"

const Home=()=>{
  const [email, setEmail]=useState("")
  const [homePageMode, setHomePageMode]=useState()

  useEffect(()=>{
    const getHomePageMode=async()=>{
      const details=await axios.get("http://localhost:4000/getDetails",{params:{email:email, id:"hello"}})
      console.log("getHomePagemode triggered")
      console.log(details.data.type)
      setHomePageMode(details.data.type)
    }  

    setEmail(localStorage.getItem("email"))
    getHomePageMode()
  },[email])
  
  return(
    (homePageMode==="user"?
    <div className={styles.homePageUser}>
      <div className={styles.headerContainer}>
        <UserHeader/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <UserSidebar/>
        </div>

        <div className={styles.bodyContainer}>
          <RequestDriver/>
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>
    :
    <div className={styles.homePageDriver}>
      <div className={styles.headerContainer}>
        <DriverHeader/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <DriverSidebar/>
        </div>

        <div className={styles.bodyContainer}>

        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>)
  )
}

export default Home