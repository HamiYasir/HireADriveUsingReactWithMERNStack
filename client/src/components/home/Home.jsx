import React,{useEffect, useState} from "react"
import styles from "./home.module.css"
import axios from "axios"

import UserHeader from "./userHome/header/UserHeader.jsx"
import UserSidebar from "./userHome/sidebar/UserSidebar.jsx"
import RequestDriver from "./userHome/body/requestDriver/RequestDriver.jsx"
import YourRequests from "./userHome/body/yourRequests/YourRequests.jsx"
import YourDrivers from "./userHome/body/yourDrivers/YourDrivers.jsx"
import UserProfile from "./userHome/body/userProfile/UserProfile.jsx"
import UserPayments from "./userHome/body/userPayments/UserPayments.jsx"

import DriverHeader from "./driverHome/header/DriverHeader.jsx"
import DriverSidebar from "./driverHome/sidebar/DriverSidebar.jsx"
import CustomerRequests from "./driverHome/body/customerRequests/CustomerRequests.jsx"
import YourJourneys from "./driverHome/body/yourJourneys/YourJourneys.jsx"
import DriverProfile from "./driverHome/body/yourProfile/DriverProfile.jsx"

const Home=()=>{
  const [email, setEmail]=useState("")
  const [tab, setTab]=useState(1)
  const [homePageMode, setHomePageMode]=useState()

  useEffect(()=>{
    const getHomePageMode=async()=>{
      const details=await axios.get("http://localhost:4000/getDetails",{params:{email:email}})
      setHomePageMode(details.data.type)
    }  

    setEmail(localStorage.getItem("email"))
    getHomePageMode()
  },[email])

  const receiveTabValueFromHeader=(value)=>{
    setTab(value)
  }

  
  return(
    (homePageMode==="user"?
    <div className={styles.homePageUser}>
      <div className={styles.headerContainer}>
          <UserHeader sendTabValueToHome={receiveTabValueFromHeader}/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <UserSidebar/>
        </div>

        <div className={styles.bodyContainer}>
          {tab===1?
            <RequestDriver/>
          :tab===2?
            <YourRequests/>
          :tab===3?
            <YourDrivers/>
          :tab===4?
            <UserProfile/>
          :tab===5?
            <UserPayments/>
          :
            setTab(1)
          } 
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>
    :
    <div className={styles.homePageDriver}>
      <div className={styles.headerContainer}>
        <DriverHeader sendTabValueToHome={receiveTabValueFromHeader}/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <DriverSidebar/>
        </div>

        <div className={styles.bodyContainer}>
          {tab===1?
            <CustomerRequests/>
          :tab===2?
            <YourJourneys/>
          :tab===3?
            <DriverProfile/>
          :
            setTab(1)
          }
        </div>
      </div>

      <div className={styles.footerContainer}>
        
      </div>
    </div>)
  )
}

export default Home