import React,{useState} from "react"
import {Box, Stack, InputLabel, Select, MenuItem, Button} from "@mui/material"
import styles from "./requestDriver.module.css"

const RequestDriver=()=>{
  const [yourDriver, setYourDriver]=useState(false)

  const handleYourDriver=()=>{
    setYourDriver(!yourDriver)
  }

  return (
    <Box className={styles.requestDriver}>
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
        <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
          <input id="prefferedDriver" type="checkbox" onChange={handleYourDriver} style={{height:"45px", width:"45px", marginRight:"10px"}}/>
          {yourDriver===true?
          <Select value="default" sx={{width:"99%"}}className={styles.inputFields}>
            <MenuItem value="default">Select your driver</MenuItem>
          </Select>
          :
          <Select value="default" sx={{width:"99%"}}className={styles.inputFields} disabled>
            <MenuItem value="default">Select your driver</MenuItem>
          </Select>
          }
        </Box>
        <p></p>
        <Button variant="contained" color="success">Send Request</Button>
      </Stack>
    </Box>
  )
}

export default RequestDriver