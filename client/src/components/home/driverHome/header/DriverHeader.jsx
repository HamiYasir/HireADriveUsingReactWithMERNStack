import React from "react"
import {Box, Typography} from "@mui/material"
import styles from "./driverHeader.module.css"
import {useNavigate} from "react-router-dom"

const DriverHeader=()=>{
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
          <button className={styles.buttons}>Requests</button>
          <button className={styles.buttons}>Your Journeys</button>
          <button className={styles.buttons}>Your Profile</button>
          <button className={styles.buttons}>Payments</button>
          <button onClick={logout} className={styles.buttons}>Logout</button>
        </Box>
    </Box>
  )
}

export default DriverHeader