import React, { useEffect, useState } from 'react'
import styles from "./userJourney.module.css"
import {Box, Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const UserJourney=()=>{
    const navigate=useNavigate()
    const location=useLocation()
    const [username, setUsername]=useState(null)
    const [drivername, setDrivername]=useState(null)
    const [fare, setFare]=useState(null)
    const [pickUp, setPickUp]=useState(null)
    const [destination, setDestination]=useState(null)
    const [isUserRequestValidatedFromUser, setIsUserRequestValidatedFromUser]=useState()
    const {userId, driverId}=location.state || {}

    useEffect(()=>{
        const getDetailsForUser=async()=>{
            const details=await axios.get("http://localhost:4000/getDetails",{params:{email:userId}})
            setUsername(details.data.details.username)
        }

        const getDetailsForDriver=async()=>{
            const details=await axios.get("http://localhost:4000/getDetails",{params:{email:driverId}})
            setDrivername(details.data.details.username)
        }
        
        const getValidatedUserRequestsForUsers=async()=>{
            const validatedUserRequestFromUser=await axios.get("http://localhost:4000/getValidatedUserRequestFromUser",{params:{userId: localStorage.getItem('email')}})
            setIsUserRequestValidatedFromUser(validatedUserRequestFromUser.data.isValid)
            setFare(validatedUserRequestFromUser.data.validatedUserRequest.confirmedFare)
            setPickUp(validatedUserRequestFromUser.data.validatedUserRequest.startingLocation)
            setDestination(validatedUserRequestFromUser.data.validatedUserRequest.destination)
        }
        
        getValidatedUserRequestsForUsers()
        getDetailsForUser()
        getDetailsForDriver()
        if(isUserRequestValidatedFromUser===false)
            navigate("/home")
    }, [isUserRequestValidatedFromUser, navigate])

    const cancelJourney=async()=>{
        await axios.delete(`http://localhost:4000/deleteUserRequest/${userId}/${driverId}`)
        navigate('/home')
    }

    return(
        <Box className={styles.userJourney}>
            <div className={styles.header}>
                <h1>You are being driven...</h1>
            </div>
            <div className={styles.main}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
                    <table border="1">
                        <tr>
                            <th>DRIVER</th>
                            <td>:</td>
                            <td>{drivername}</td>
                        </tr>
                        <tr>
                            <th>PASSENGER</th>
                            <td>:</td>
                            <td>{username}</td> 
                        </tr>
                        <tr>
                            <th>FARE</th>
                            <td>:</td>
                            <td>{fare}</td>
                        </tr>
                        <tr>
                            <th>PICKUP</th>
                            <td>:</td>
                            <td>{pickUp}</td>
                        </tr>
                        <tr>
                            <th>DESTINATION</th>
                            <td>:</td>
                            <td>{destination}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={styles.footer}>
                <Button color="error" variant="contained" sx={{ height: "100px", width: "250px", fontSize: "30px", borderRadius: "20px", marginRight: "60px" }} onClick={cancelJourney}>CANCEL JOURNEY</Button>
            </div>
        </Box>
    )
}

export default UserJourney