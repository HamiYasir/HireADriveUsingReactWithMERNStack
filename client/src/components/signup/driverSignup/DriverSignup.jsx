import React from "react"
import {Box, Input, Stack, Button, InputLabel} from "@mui/material"
import styles from "./driverSignup.module.css"

const DriverSignup=()=>{
  return (
    <div className={styles.mainContainer}>
      <Box className={styles.main}>
        <Stack className={styles.driverLogin}>
          <InputLabel sx={{fontSize:"15px"}}>Profile Picture</InputLabel>
          <input type="file" sx={{}}/>

          <p><br/></p>

          <Input type="text" placeholder="Username" sx={{fontSize:"15px"}}/>
          
          <p><br/></p>

          <Input type="text" placeholder="Email" sx={{fontSize:"15px"}}/>
          
          <p><br/></p>
          
          <Input type="password" placeholder="Password" sx={{fontSize:"15px"}}/>
          
          <p><br/></p>

          <Input type="password" placeholder="Confirm Password" sx={{fontSize:"15px"}}/>
          
          <p><br/></p>

          <Button variant="contained" sx={{fontSize:"20px"}}>Sign Up</Button>
          
          <a href="/" className={styles.signUpLink}>Already have an account?Login!</a>
          {/* <Typography>{error}</Typography> */}
        </Stack>
      </Box>
    </div>
  )
}

export default DriverSignup