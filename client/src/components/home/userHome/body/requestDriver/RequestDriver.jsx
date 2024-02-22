import React from "react"
import {Box, Typography, Stack, InputLabel, Select, MenuItem, Checkbox} from "@mui/material"
import styles from "./requestDriver.module.css"

const RequestDriver=()=>{
  return (
    <Box className={styles.userRequest}>
        <div className={styles.header}>
          <Typography variant="h4">Request a Driver</Typography>
        </div>

        <div className={styles.body}>
          <Stack>
            <p></p>
            <InputLabel htmlfor="startingLocation">Starting Location</InputLabel>
            <input id="startngLocation" type="text" className={styles.inputFields}/>
            <p></p>
            <InputLabel htmlfor="destination">Destination</InputLabel>
            <input id="destination" type="text" className={styles.inputFields}/>
            <p></p>
            <InputLabel htmlfor="vehicle">Vehicle</InputLabel>
            <Select id="vehicle" className={styles.inputFields}>
              <MenuItem value="2-Seater Bike">2-Seater Bike</MenuItem>
              <MenuItem value="2-Seater Scooter">2-Seater Scooter</MenuItem>
              <MenuItem value="4-Seater Hatchback">4-Seater Hatchback</MenuItem>
              <MenuItem value="4-Seater Sedan">4-Seater Sedan</MenuItem>
              <MenuItem value="5-Seater">5-Seater</MenuItem>
              <MenuItem value="7-Seater">7-Seater</MenuItem>
              <MenuItem value="7-Seater Luxury">7-Seater Luxury</MenuItem>
              <MenuItem value="8-Seater Van">8-Seater Van</MenuItem>
            </Select>
            <p></p>
            <InputLabel htmlfor="prefferedDriver">Do you prefer a driver?</InputLabel>
            <input id="prefferedDriver" type="checkbox" style={{height:"22px"}}/>
          </Stack>
        </div>

        <div className={styles.footer}>
          
        </div>
    </Box>
  )
}

export default RequestDriver