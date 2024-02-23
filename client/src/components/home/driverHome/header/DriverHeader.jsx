import React,{useState} from "react"
import {Box, Typography} from "@mui/material"
import styles from "./driverHeader.module.css"
import {useNavigate} from "react-router-dom"

const DriverHeader=({sendTabValueToHome})=>{
  const [tab, setTab]=useState(1)
  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem("email")
    navigate("/")
  }

  return(
    <Box className={styles.header}>
        <Box className={styles.logo}>
          <img src="../../../pictures/hire_a_drive_logo.png" alt="Hire a Drive Logo" height={150} width={150} style={{marginTop:"-15px"}}/>
          <Typography variant="h6" sx={{fontSize:"20px", marginTop:"-30px", fontFamily:"impact"}}>Hire A Drive</Typography>
        </Box>
        <Box className={styles.navbar}>
          {tab===1?<button onClick={()=>{sendTabValueToHome(1);setTab(1)}} className={styles.buttonsActive}>Requests</button>:<button onClick={()=>{sendTabValueToHome(1);setTab(1)}} className={styles.buttons}>Requests</button>}
          {tab===2?<button onClick={()=>{sendTabValueToHome(2);setTab(2)}} className={styles.buttonsActive}>Your Journeys</button>:<button onClick={()=>{sendTabValueToHome(2);setTab(2)}} className={styles.buttons}>Your Journeys</button>}
          {tab===3?<button onClick={()=>{sendTabValueToHome(3);setTab(3)}} className={styles.buttonsActive}>Your Profile</button>:<button onClick={()=>{sendTabValueToHome(3);setTab(3)}} className={styles.buttons}>Your Profile</button>}
          {tab===4?<button onClick={()=>{sendTabValueToHome(4);setTab(4)}} className={styles.buttonsActive}>Payments</button>:<button onClick={()=>{sendTabValueToHome(4);setTab(4)}} className={styles.buttons}>Payments</button>}
          <button onClick={logout} className={styles.buttons}>Logout</button>
        </Box>
    </Box>
  )
}

export default DriverHeader