import React,{useState} from "react"
import {Box, Typography} from "@mui/material"
import UserSignup from "./userSignup/UserSignup.jsx"
import DriverSignup from "./driverSignup/DriverSignup.jsx"
import styles from "./signup.module.css"

const Signup= () => {
    const [client, setClient]=useState("user")

    function gotoUser(){
        setClient("user")
    }

    function gotoDriver(){
        setClient("driver")
    }

  return (
    <div className={styles.signupPage}>
        <div className={styles.headerContainer}>
            <Box className={styles.header}>
                <Typography variant="h3">Signup</Typography>
            </Box>
        </div>

        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <Box className={styles.buttonContainer}>
                    {client==="user"?<button onClick={gotoUser} className={styles.bttnActive}>User</button>:<button onClick={gotoUser} className={styles.bttn}>User</button>}
                    {client==="driver"?<button onClick={gotoDriver} className={styles.bttnActive}>Driver</button>:<button onClick={gotoDriver} className={styles.bttn}>Driver</button>}
                </Box>
                <p><br/></p>
                {client==="user"?<UserSignup/>:<DriverSignup/>}
            </div>
        </div>

        <div className={styles.footerContainer}>
        
        </div>
    </div>
  )
}

export default Signup