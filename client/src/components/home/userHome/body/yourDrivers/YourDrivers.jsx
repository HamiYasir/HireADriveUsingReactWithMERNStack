import React from "react"
import styles from "./yourDrivers.module.css"
import {Box, Button} from "@mui/material"

const YourDrivers=()=>{
  return(
    <Box className={styles.yourDrivers}>
      <ul>
        <li>Hami Yasir<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
        <li>Driver<span className={styles.details}><img src="" alt="driver profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>&#9734;&#9734;&#9734;&#9734;&#9734;</p><Button>Book this driver</Button></span></li>
      </ul>
    </Box>
  )
}

export default YourDrivers