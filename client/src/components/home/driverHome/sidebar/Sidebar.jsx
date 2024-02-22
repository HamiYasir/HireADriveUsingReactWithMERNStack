import React,{useState, useEffect} from "react"
import styles from "./sidebar.module.css"
import {Box, Paper, Typography} from "@mui/material"
import axios from "axios"

const Sidebar=()=>{
  const [profilePic, setProfilePic]=useState("")
  const [username, setUsername]=useState("")
  const [email, setEmail]=useState("")
  const [dateOfBirth, setDateOfBirth]=useState("")
  const [address, setAddress]=useState("")

  useEffect(()=>{
    setEmail(localStorage.getItem("email"))
    getSessionDetails()
  },[])

  const getSessionDetails=async()=>{
    const sessionDetails=await axios.get("http://localhost:4000/getDetails", {params:{email:localStorage.getItem("email")}})
    setProfilePic(sessionDetails.data.details.profilePic)
    setUsername(sessionDetails.data.details.username)
    setDateOfBirth(sessionDetails.data.details.dateOfBirth)
    setAddress(sessionDetails.data.details.address)
  }

  return(
    <Box className={styles.sidebar}>
      <Paper sx={{borderRadius:"20px"}} className={styles.paper}>
        <Box className={styles.usernameContainer}>
          <Box sx={{marginRight:"45%"}}>
            <Typography sx={{fontSize:"30px"}}>{username}</Typography>
            <p style={{marginTop:"-10px", color:"green", fontSize:"15px", textAlign:"center"}}>{email}</p>
          </Box>
          <img src={profilePic} alt="user profile pic" style={{height:"100px", width:"100px", borderRadius:"50px", border:"3px solid black"}}/>
        </Box>
        
        <Box className={styles.dateOfBirth}>{dateOfBirth}</Box>

        <Box className={styles.address}>{address}</Box>

        <Box className={styles.currentStatus}>Current Status</Box>
      </Paper>
    </Box>
  )
}

export default Sidebar