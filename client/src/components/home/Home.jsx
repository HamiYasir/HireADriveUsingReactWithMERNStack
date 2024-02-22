import React,{useEffect} from "react"
import styles from "./home.module.css"
import UserHeader from "./userHome/header/UserHeader.jsx"
import UserSidebar from "./userHome/sidebar/UserSidebar.jsx"
import UserBody from "./userHome/body/UserBody.jsx"
import DriverHeader from "./driverHome/header/DriverHeader.jsx"
import DriverSidebar from "./driverHome/sidebar/DriverSidebar.jsx"
import DriverBody from "./driverHome/body/DriverBody.jsx"
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
          <UserBody/>
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>
    :
    <div className={styles.homePageDriver}>
      <div className={styles.headerContainer}>
        {homePageMode==="user"?<UserHeader/>:<DriverHeader/>}
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          {homePageMode==="user"?<UserSidebar/>:<DriverSidebar/>}
        </div>

        <div className={styles.bodyContainer}>
          {homePageMode==="user"?<UserBody/>:<DriverBody/>}
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>)
  )
}

export default Home