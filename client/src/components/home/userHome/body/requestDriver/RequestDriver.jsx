  import React,{useState} from "react"
  import {Box, Stack, InputLabel, Select, MenuItem, Button} from "@mui/material"
  import styles from "./requestDriver.module.css"
  import axios from 'axios'

  const RequestDriver=()=>{
    const [startingLocation, setStartingLocation]=useState()
    const [destination, setDestination]=useState()
    const [vehicle, setVehicle]=useState("default")
    const [driver, setDriver]=useState("random")
    const [yourDriver, setYourDriver]=useState(false)

    const handleStartingLocation=(event)=>{
      setStartingLocation(event.target.value)
    }

    const handleDestination=(event)=>{
      setDestination(event.target.value)
    }

    const handleVehicle=(event)=>{
      setVehicle(event.target.value)
    }

    const handleYourDriver=()=>{
      setYourDriver(prev=>{
        const newValue = !prev
        setDriver(newValue ? "default" : "random")
        return newValue
      })
    }

    const handleDriver=(event)=>{
      setDriver(event.target.value)
    }

    const submitRequest=async()=>{
      const status_submit=await axios.post("http://localhost:4000/submitUserRequest", {userId:localStorage.getItem('email'), driverId: "", startingLocation:startingLocation, destination:destination, vehicle:vehicle, driver:driver})
      console.log(status_submit)
      setStartingLocation("")
      setDestination("")
      setVehicle("default")
      setDriver("random")
    }

    return (
      <Box className={styles.requestDriver}>
        <Stack>
          <p></p>
          <InputLabel htmlFor="startingLocation">Starting Location</InputLabel>
          <input id="startingLocation" type="text" value={startingLocation} onChange={handleStartingLocation} className={styles.inputFields}/>
          <p></p>
          <InputLabel htmlFor="destination">Destination</InputLabel>
          <input id="destination" type="text" value={destination} onChange={handleDestination} className={styles.inputFields}/>
          <p></p>
          <InputLabel htmlFor="vehicle">Vehicle</InputLabel>
          <Select id="vehicle" value={vehicle} onChange={handleVehicle} className={styles.inputFields}>
            <MenuItem value="default" style={{display:"none"}}></MenuItem>
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
          <InputLabel htmlFor="preferedDriver">Do you prefer a driver?</InputLabel>
          <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <input id="preferedDriver" type="checkbox" onChange={handleYourDriver} style={{height:"45px", width:"45px", marginRight:"10px"}}/>
            {yourDriver===true?
            <Select value={driver} onChange={handleDriver} sx={{width:"99%"}} className={styles.inputFields}>
              <MenuItem value="default">Select your driver</MenuItem>
              <MenuItem value="random" style={{display:"none"}}>Select your driver</MenuItem>
            </Select>
            :
            <Select value={driver} sx={{width:"99%"}} className={styles.inputFields} disabled>
              <MenuItem value="default">Select your driver</MenuItem>
              <MenuItem value="random" style={{display:"none"}}>Select your driver</MenuItem>
            </Select>
            }
          </Box>
          <p></p>
          <Button variant="contained" color="success" onClick={submitRequest}>Send Request</Button>
        </Stack>
      </Box>
    )
  }

  export default RequestDriver