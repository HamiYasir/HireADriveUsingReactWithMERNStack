import React from "react"
import styles from "./driverProfile.module.css"
import image from "../../../../pictures/hami_yasir.jpg"
import {Box,Paper,Button,MenuItem,InputLabel,TextareaAutosize,Typography,Select} from "@mui/material"

const DriverProfile=()=>{
  return(
    <Box className={styles.driverProfile}>
      <Box className={styles.rowContainer}>
        <div className={styles.snapStart}>snapStart</div>
        <Paper className={styles.overview}>
          <div style={{display:"flex",flexDirection:"row",height:"90%",paddingTop:"2%"}}>
            <Paper sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",height:"100%",width:"33.3%",padding:"10px 20px",marginRight:"5px",borderRadius:"20px",boxShadow:"2px 2px 10px black"}}>
              <img src={image} alt="profile pic" style={{maxHeight:"75%",maxWidth:"75%",borderRadius:"50%",paddingTop:"20px",marginBottom:"5%",border:"2px ridge black"}}/>
              <div style={{backgroundColor:"rgb(200,200,200)",borderRadius:"20px",boxShadow:"2px 2px 5px black"}}>
                <p style={{color:"gold",fontSize:"75px",marginTop:"-5%",marginBottom:"15px"}}>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
              </div>
              <Button variant="contained" color="success" sx={{marginTop:"2%",borderRadius:"20px",width:"90%"}}>Change Picture</Button>
            </Paper>
            <Paper sx={{height:"100%",marginLeft:"5px",backgroundColor:"white",width:"66.6%",marginRight:"5px",borderRadius:"20px",boxShadow:"2px 2px 10px black",padding:"10px 30px",textAlign:"center"}}>
              <p style={{fontSize:"50px"}}>You joined Hire a Drive on &lt;dateJoined&gt;</p>
            </Paper>
          </div>
        </Paper>
        <div className={styles.divider}>divider</div>
        <Box className={styles.editables}>
          <Box className={styles.columnContainer}>
            <Paper className={styles.paper1}>
              <Box className={styles.password}>
                <Typography variant="h4" sx={{padding:"0 5%",marginBottom:"3%"}}>Change Password:</Typography>
                <InputLabel htmlfor="password" sx={{fontSize:"35px",width:"100%",marginLeft:"30%",marginTop:"6%"}}>Password:&nbsp;&nbsp;<input id="password" type="text" style={{width:"25%",fontSize:"30px",backgroundColor:"rgb(234, 233, 233)"}}/></InputLabel>
                <p></p>
                <InputLabel htmlfor="confirmPassword" sx={{fontSize:"35px",width:"100%",marginLeft:"18%"}}>Confirm Password:&nbsp;&nbsp;<input id="password" type="text" style={{width:"25%",fontSize:"30px",backgroundColor:"rgb(234, 233, 233)"}}/></InputLabel>
                <p></p>
                <Button variant="contained" color="success" sx={{width:"22%",marginLeft:"75%",marginTop:"5%"}}>Change Password</Button>
              </Box>
            </Paper>
            <div className={styles.divider}>divider</div>
            <Paper className={styles.paper2}>
              <Box className={styles.address}>
                <Typography variant="h5" sx={{padding:"0 5%",marginBottom:"3%", marginRight:"65%"}}>Change Region & Address:</Typography>
                <InputLabel htmlfor="region" sx={{fontSize:"20px",marginLeft:"10%"}}>Region:</InputLabel>
                <Select id="region" style={{width:"50%",marginLeft:"10%",backgroundColor:"rgb(234, 233, 233)"}}>
                    <MenuItem value="Thiruvananthapuram">Thiruvananthapuram</MenuItem>
                    <MenuItem value="Kollam">Kollam</MenuItem>
                    <MenuItem value="Pathanamthitta">Pathanamthitta</MenuItem>
                    <MenuItem value="Alappuzha">Alappuzha</MenuItem>
                    <MenuItem value="Kottayam">Kottayam</MenuItem>
                    <MenuItem value="Idukki">Idukki</MenuItem>
                    <MenuItem value="Ernakulam">Ernakulam</MenuItem>
                    <MenuItem value="Thrissur">Thrissur</MenuItem>
                    <MenuItem value="Palakkad">Palakkad</MenuItem>
                    <MenuItem value="Malappuram">Malappuram</MenuItem>
                    <MenuItem value="Kozhikode">Kozhikode</MenuItem>
                    <MenuItem value="Wayanad">Wayanad</MenuItem>
                    <MenuItem value="Kannur">Kannur</MenuItem>
                    <MenuItem value="Kasaragod">Kasaragod</MenuItem>
                </Select>
                <Button variant="contained" color="success" sx={{width:"22%", marginLeft:"75%",marginTop:"-4%"}}>Change Region</Button>
                <p></p>
                <InputLabel htmlfor="address" sx={{fontSize:"22px",marginLeft:"10%"}}>Address:</InputLabel>
                <TextareaAutosize id="address" minRows={5} style={{width:"50%",marginLeft:"10%",backgroundColor:"rgb(234, 233, 233)"}}/>
                <Button variant="contained" color="success" sx={{width:"22%", marginLeft:"75%",marginTop:"-7%"}}>Change Address</Button>
              </Box>
            </Paper>
            <div className={styles.divider}>divider</div>
            <Paper className={styles.paper3}>
              <Box className={styles.vehicleList}>
                <Typography variant="h5" sx={{padding:"0% 2%"}}>Add or Remove vehicles:</Typography>
                <Box className={styles.itemsContainer}>
                  <Box className={styles.list}>
                    <Paper sx={{display:"flex",flexDirection:"column",justifyContent:"center",border:"2px solid #2C84D1"}}>
                      <caption>Item Box</caption>
                    </Paper>
                  </Box>
                  <Box className={styles.interface}>
                    <input type="text" placeholder="Type item name here..." style={{fontSize:"20px"}}/>
                    <Button variant="contained" sx={{marginTop:"3%"}}>Add Item</Button>
                    <Button variant="contained" color="error" sx={{marginTop:"3%"}}>Remove Item</Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
        <div className={styles.snapEnd}>snapEnd</div>
      </Box>
    </Box>
  )
}

export default DriverProfile