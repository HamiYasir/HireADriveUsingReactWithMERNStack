import React from "react"
import styles from "./driverProfile.module.css"
import {Paper, Stack} from "@mui/material"

const DriverProfile=()=>{
  return(
    <div className={styles.driverProfile}>
      <Stack className={styles.rowContainer}>
        <Paper className={styles.overview}>
          <p>You joined Hire a Drive on &lt;dateJoined&gt;</p>
        </Paper>

        <Paper className={styles.editables}>
          <p>Editables</p>
        </Paper>
      </Stack>
    </div>
  )
}

export default DriverProfile