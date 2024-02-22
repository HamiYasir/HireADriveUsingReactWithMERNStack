import React,{useEffect} from "react"
import styles from "./home.module.css"
import UserHeader from "./userHome/header/Header.jsx"
import UserSidebar from "./userHome/sidebar/Sidebar.jsx"
import UserBody from "./userHome/body/Body.jsx"
import DriverHeader from "./driverHome/header/Header.jsx"
import DriverSidebar from "./driverHome/sidebar/Sidebar.jsx"
import DriverBody from "./driverHome/body/Body.jsx"
import axios from "axios"
import { useState } from "react"

const Home=()=>{
  const [email, setEmail]=useState("")
  const [homePageMode, setHomePageMode]=useState()

  useEffect(()=>{
    setEmail(localStorage.getItem("email"))
    getHomePageMode()
  },[])
  
  const getHomePageMode=async()=>{
    const details=await axios.get("http://localhost:4000/getDetails",{params:{email:email}})
    console.log(details.data.type)
    setHomePageMode(details.data.type)
  }

  return(
    <div className={styles.homePage}>
      <div className={styles.headerContainer}>
        {/* <UserHeader/> */}
        <DriverHeader/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          {/* <UserSidebar/> */}
          <DriverSidebar/>
        </div>

        <div className={styles.bodyContainer}>
          {/* <UserBody/> */}
          {/* <DriverBody/> */}
          {homePageMode}
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>
  )
}

export default Home