import React from "react"
import {Box, Stack, InputLabel, Select, MenuItem, Paper, Typography} from "@mui/material"
import styles from "./yourRequests.module.css"
import image from "../../../../pictures/abhinand_t.jpg"

const YourRequests=()=>{
  return(
    <Box className={styles.yourRequests}>
      <Stack className={styles.stack}>
          <Select value="default" className={styles.inputFields}>
            <MenuItem value="default" sx={{display:"none"}}>Drivers who accepted your request</MenuItem>
            <MenuItem value="Hami Yasir">Hami Yasir</MenuItem>
          </Select>
          <p></p>
          <InputLabel htmlFor="fare">Journey Fare</InputLabel>
          <input variant="outlined" id="fare" className={styles.inputFields} readOnly/>
          <p></p>
          <Paper className={styles.paper}>
              <div className={styles.row1}>
                <img src={image} alt="driver profile pic" style={{height:"150px",width:"150px",borderRadius:"50%"}}/>
                <Typography variant="h6" sx={{paddingTop:"5%"}}>Driver Name</Typography>
              </div>
              <div className={styles.row2}>
                <a href="/" className={styles.star}>&#9734;<a href="/" className={styles.star}>&#9734;<a href="/" className={styles.star}>&#9734;<a href="/" className={styles.star}>&#9734;<a href="/" className={styles.star}>&#9734;</a></a></a></a></a>
              </div>
          </Paper>
      </Stack>
    </Box>
  )
}

export default YourRequests