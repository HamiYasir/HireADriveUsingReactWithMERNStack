import React from 'react'
import styles from "./userJourney.module.css"
import {Box, Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const UserJourney=()=>{
    const navigate=useNavigate()

    return(
        <Box className={styles.userJourney}>
            <div className={styles.main}>
                <div className={styles.buttonGroup}>
                    <button>Driver Reached</button>
                    <button>Send Journey Fare</button>
                </div>
            </div>
            <div className={styles.footer}>
                <Button color="error" variant="contained" sx={{ height: "100px", width: "250px", fontSize: "30px", borderRadius: "20px", marginRight: "60px" }} onClick={()=>{navigate("/home")}}>CANCEL JOURNEY</Button>
            </div>
        </Box>
    )
}

export default UserJourney