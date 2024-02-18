import React from "react"
import {Box, Typography, Stack, Input, Button} from "@mui/material"
import styles from "./login.module.css" 

const Login=()=>{
  return (
    <div className={styles.loginPage}>
        <div className={styles.headerContainer}>
            <Box className={styles.header}>
                <Typography variant="h3">Login</Typography>
            </Box>
        </div>

        <div className={styles.mainContainer}>
            <Box className={styles.mainLeft}>
                <h1>Hire A Drive!</h1>
                <p>Trips made Easy</p>
            </Box>
            <Box className={styles.mainRight}>
                <Stack className={styles.driverLogin}>
                    <Input type="text" placeholder="Email" sx={{fontSize:"30px"}}/>
                    
                    <p><br/></p>
                    
                    <Input type="password" placeholder="Password" sx={{fontSize:"30px"}}/>
                    
                    <p><br/></p>
                    <p><br/></p>

                    <Button variant="contained" sx={{fontSize:"20px"}}>Login</Button>
                    
                    <a href="/signup" className={styles.signUpLink}>Don't own an account?Sign Up!</a>
                    {/* <Typography>{error}</Typography> */}
                </Stack>
            </Box>
        </div>

        <div className={styles.footerContainer}>

        </div>
    </div>
  )
}

export default Login