import React from "react"
import {Box, Stack, InputLabel, Select, MenuItem, Paper, Typography} from "@mui/material"
import styles from "./yourRequests.module.css"

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
                <img src="" alt="driver profile pic" style={{height:"100px", width:"100px", borderRadius:"50px"}}/>
                <Typography variant="h6">Driver Name</Typography>
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