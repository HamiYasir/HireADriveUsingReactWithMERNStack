import React from "react"
import {Box} from "@mui/material"
import styles from "./header.module.css"

const Header=()=>{
  return(
    <Box className={styles.header}>
        <Box className={styles.logo}>
          <img src="../../../pictures/hire_a_drive_logo.png" alt="Hire a Drive Logo" height={150} width={150}/>
        </Box>
        <Box className={styles.navbar}>
          <a href="/">Request Driver</a>
          <a href="/">View Request Status</a>
        </Box>
    </Box>
  )
}

export default Header