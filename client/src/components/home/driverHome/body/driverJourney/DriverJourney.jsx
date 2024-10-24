import React from 'react'
import styles from "./driverJourney.module.css"
import {Box, Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const DriverJourney=()=>{
    const navigate=useNavigate()

    return(
        <Box className={styles.driverJourney}>
            <div className={styles.main}>
                <div className={styles.buttonGroup}>
                    <button>Customer Reached</button>
                    <button>Reached Destination</button>
                    <button>Journey Fare Recieved</button>
                </div>
            </div>
            <div className={styles.footer}>
                <Button color="error" variant="contained" sx={{ height: "100px", width: "250px", fontSize: "30px", borderRadius: "20px", marginRight: "60px" }} onClick={()=>{navigate("/home")}}>CANCEL JOURNEY</Button>
            </div>
        </Box>
    )
}

export default DriverJourney