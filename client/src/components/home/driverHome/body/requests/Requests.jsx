import React, { useState, useEffect } from 'react'
import {Box, Button, Checkbox} from "@mui/material"
import styles from "./requests.module.css"
import axios from 'axios'

const CustomerRequests=()=>{
  const [location, setLocation]=useState("default")
  const [requests, setRequests]=useState([])

  const handleLocation=(event)=>{
    setLocation(event.target.value)
  }

  const check=()=>{
    console.log(requests)
  }

  const getRequests=async()=>{
    const requests_status=await axios.get("http://localhost:4000/getUserRequests", {params:{location:location}})
    setRequests(requests_status.data)
  }

  return (
    <Box className={styles.customerRequests}>
      <Box className={styles.search}>
        <select id="location" value={location} onChange={handleLocation} className={styles.inputFields}>
          <option value="default" style={{display:"none"}}>Select your location</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Kollam">Kollam</option>
          <option value="Pathanamthitta">Pathanamthitta</option>
          <option value="Alappuzha">Alappuzha</option>
          <option value="Kottayam">Kottayam</option>
          <option value="Idukki">Idukki</option>
          <option value="Ernakulam">Ernakulam</option>
          <option value="Thrissur">Thrissur</option>
          <option value="Palakad">Palakad</option>
          <option value="Malappuram">Malappuram</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Wayanad">Wayanad</option>
          <option value="Kannur">Kannur</option>
          <option value="Kasaragod">Kasaragod</option>
        </select>
        <button className={styles.searchButton} onClick={getRequests}>Search</button>
        <button className={styles.searchButton} onClick={check}>Search</button>
        {/* <ul>
            <li><strong>Abhinand T</strong> wants to go from <strong>Annassery</strong> to <strong>Kozhikode</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"312px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
            <li><strong>User</strong> wants to go from <strong>User Residence</strong> to <strong>Koduvally</strong><Button color="success" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"342px", marginRight:"10px"}}>&#10003;</Button><Button color="error" variant="contained" sx={{height:"55px", width:"20px", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>x</Button></li>
        </ul> */}
        <ul>
          {requests.map((request) => (
            <li
              key={request.userId}
              style={{backgroundColor: 'rgb(253, 253, 253, 0.700)', width: '37vw', fontFamily: 'sans-serif', listStyle: 'none', borderRadius: '5px', marginLeft: '-1vw', padding: '10px', marginBottom: '10px'}}>
              <strong>{request.userName}</strong> wants to go from <strong>{request.startLocation}</strong> to <strong>{request.endLocation}</strong>
              <Button color="success" variant="contained" sx={{ height: "55px", width: "20px", fontSize: "30px", marginLeft: "10px", marginRight: "10px" }}>&#10003;</Button>
              <Button color="error" variant="contained" sx={{ height: "55px", width: "20px", fontSize: "30px", marginLeft: "10px", marginRight: "10px" }}>x</Button>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default CustomerRequests